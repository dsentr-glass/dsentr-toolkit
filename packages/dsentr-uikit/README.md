# 🥞 DSentr UIkit

[![Version](https://img.shields.io/npm/v/@dsentr-libs/uikit)](https://www.npmjs.com/package/@dsentr-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@dsentr-libs/uikit)](https://www.npmjs.com/package/@dsentr-libs/uikit)

DSentr UIkit is a PancakeSwap forked set of React components and hooks used to build pages on DSentr's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @dsentr-libs/uikit`

## Setup

### Theme

Before using DSentr UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@dsentr-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@dsentr-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://dsentr.github.io/dsentr-uikit/)
