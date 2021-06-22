import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getGlassProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getGlassProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.dsentrProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getGlassProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.dsentrProfile[TESTNET_CHAIN_ID]);
  });
});
