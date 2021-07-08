[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/dsentr-glass/dsentr-toolkit)

# DSentr Toolkit

This repository is a PancakeSwap forked monorepo managed with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/).

## Packages

- [dsentr-uikit](https://github.com/dsentr-glass/dsentr-toolkit/tree/master/packages/dsentr-uikit) : React components used to build the DSentr UI

## How to use

Clone the repository

```
git clone git@github.com:dsentr-glass/dsentr-toolkit.git
```

Run yarn at the root of the workspace.
Some packages may be very large and yarn will assume a network issue. Use `yarn network-timeout 100000` if errors persist.

```
cd dsentr-toolkit
yarn
```

Then, refer to the readme of each project.
