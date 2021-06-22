import Web3 from "web3";
import Cookies from "js-cookie";
import DSentrProfileSdk from "./profile-sdk";
import web3NoAccount from "./utils/web3";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID, profileApi } from "./constants/common";
import nfts from "./constants/nfts";
import teamsList from "./constants/teams";
import { existingAddress1, existingAddress2, nonexistentAddress } from "./mocks/mockAddresses";
import { server, rest } from "./mocks/server";

jest.mock("./utils/contractHelpers");
jest.mock("js-cookie", () => ({
  set: jest.fn(() => null),
}));

describe("DSentrProfileSdk", () => {
  describe("constructor", () => {
    it("uses default web3 instance if no web3 is provided", () => {
      const sdk = new DSentrProfileSdk();
      expect(sdk.web3).toBe(web3NoAccount);
    });
    it("uses mainnet chainId if no chainId is provided", () => {
      const sdk = new DSentrProfileSdk();
      expect(sdk.chainId).toBe(MAINNET_CHAIN_ID);
    });
    it("uses custom web3 instance if provided", () => {
      const httpProvider = new Web3.providers.HttpProvider("http://customrpc.com", {
        timeout: 10000,
      });
      const customWeb3 = new Web3(httpProvider);
      const sdk = new DSentrProfileSdk({ web3: customWeb3 });
      expect(sdk.web3).toBe(customWeb3);
    });
    it("uses specific chainId if chainId is provided", () => {
      const sdk = new DSentrProfileSdk({ chainId: TESTNET_CHAIN_ID });
      expect(sdk.chainId).toBe(TESTNET_CHAIN_ID);
    });
  });

  describe("methods", () => {
    const sdk = new DSentrProfileSdk();
    beforeEach(() => {
      jest.clearAllMocks();
    });

    describe("getUsername", () => {
      it("returns username for valid address", async () => {
        await expect(sdk.getUsername(existingAddress1)).resolves.toEqual("Cheems");
      });
      it("returns empty string for invalid address", async () => {
        await expect(sdk.getUsername(nonexistentAddress)).resolves.toEqual("");
      });
      it("returns empty string when there is internal server error", async () => {
        server.use(
          rest.get(`${profileApi}/api/users/${existingAddress1}`, async (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({ message: "500 Internal Server Error" }));
          })
        );
        await expect(sdk.getUsername(nonexistentAddress)).resolves.toEqual("");
      });
    });

    describe("getAchievements", () => {
      it("returns achievements for existing address", async () => {
        const expectedAchievements = [
          {
            id: "511080000",
            type: "ifo",
            address: existingAddress1,
            title: {
              id: 999,
              fallback: `IFO Shopper: Belt`,
              data: {
                name: "Belt",
              },
            },
            description: {
              id: 999,
              fallback: `Committed more than $5 worth of LP in the Belt IFO`,
              data: {
                name: "Belt",
              },
            },
            badge: "ifo-belt.svg",
            points: 200,
          },
          {
            id: "512010010",
            type: "teambattle",
            address: existingAddress1,
            title: "Easter Participant: Silver",
            badge: "easter-participant-silver.svg",
            points: 500,
          },
          {
            id: "511090000",
            type: "ifo",
            address: existingAddress1,
            title: {
              id: 999,
              fallback: `IFO Shopper: Horizon Protocol`,
              data: {
                name: "Horizon Protocol",
              },
            },
            description: {
              id: 999,
              fallback: `Committed more than $5 worth of LP in the Horizon Protocol IFO`,
              data: {
                name: "Horizon Protocol",
              },
            },
            badge: "ifo-hzn.svg",
            points: 100,
          },
        ];
        const achievements = await sdk.getAchievements(existingAddress1);
        expect(achievements).toEqual(expectedAchievements);
      });
      it("returns empty array for address with no achievements", async () => {
        const achievements = await sdk.getAchievements(existingAddress2);
        expect(achievements).toEqual([]);
      });
      it("returns empty array for non-existent address", async () => {
        const achievements = await sdk.getAchievements(nonexistentAddress);
        expect(achievements).toEqual([]);
      });
    });

    describe("getTeam", () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });
      it("returns team data for valid team", async () => {
        await expect(sdk.getTeam(2)).resolves.toEqual({
          ...teamsList[1],
          users: 77000,
          points: 341500,
          isJoinable: true,
        });
      });
      it("returns null for non-existent team id", async () => {
        await expect(sdk.getTeam(69)).resolves.toEqual(null);
      });
    });

    describe("getProfile", () => {
      const sleepyNft = nfts.find((nft) => nft.identifier === "sleepy");
      beforeEach(() => {
        jest.clearAllMocks();
      });
      it("returns proper response for unregistered user", async () => {
        const profile = await sdk.getProfile(nonexistentAddress);
        expect(profile).toEqual({ hasRegistered: false, profile: null });
      });
      it("returns proper response for registered user", async () => {
        const profile = await sdk.getProfile(existingAddress1);
        expect(profile).toEqual({
          hasRegistered: true,
          profile: {
            isActive: true,
            userId: 123,
            username: "Cheems",
            teamId: 2,
            points: 3000,
            tokenId: 555,
            nftAddress: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07",
            nft: sleepyNft,
            team: { ...teamsList[1], users: 77000, points: 341500, isJoinable: true },
          },
        });
      });
      it("sets cookies", async () => {
        await sdk.getProfile(existingAddress1);
        expect(Cookies.set).toBeCalledWith(
          `profile_${existingAddress1}`,
          {
            username: "Cheems",
            avatar: `https://dsentr.com/images/nfts/${sleepyNft.images.sm}`,
          },
          { domain: "dsentr.com", secure: true, expires: 30 }
        );
        expect(Cookies.set).toBeCalledTimes(1);
      });
    });
  });
});