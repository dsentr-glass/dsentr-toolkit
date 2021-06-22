import React from 'react'
import noop from 'lodash/noop'
import { BrowserRouter } from 'react-router-dom'
import { renderWithTheme } from '../../testHelpers'
import { Menu, menuConfig, Language } from '../../widgets/Menu'

/**
 * @see https://jestjs.io/docs/en/manual-mocks
 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `en${i}-locale`
}))

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(
    <BrowserRouter>
      <Menu
        account='0xbdda50183d817c3289f895a4472eb475967dc980'
        login={noop}
        logout={noop}
        isDark={false}
        toggleTheme={noop}
        langs={langs}
        setLang={noop}
        currentLang='en-US'
        glassPriceUsd={0.23158668932877668}
        links={menuConfig}
      >
        body
      </Menu>
    </BrowserRouter>
  )

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c24 {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: #333333;
      -webkit-transition: opacity 0.4s;
      transition: opacity 0.4s;
      opacity: 0;
      z-index: 10;
      pointer-events: none;
    }

    .c2 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c5 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #7A6EAA;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c7 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #280D5F;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c13 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #280D5F;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      margin-right: 8px;
    }

    .c3 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 5px;
      box-shadow: -3px -3px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #23caca;
      box-shadow: none;
      width: sm;
      height: sm;
      margin-right: 24px;
    }

    .c3:hover:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c3:active:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c3:disabled,
    .c3.dsentr-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c8 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 5px;
      box-shadow: -3px -3px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 32px;
      padding: 0 16px;
      background-color: #EFF4F5;
      box-shadow: none;
      color: #23caca;
    }

    .c8:hover:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c8:active:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c8:disabled,
    .c8.dsentr-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c21 {
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border: 0;
      border-radius: 5px;
      box-shadow: -3px -3px 0px 0px rgba(14,14,44,0.4) inset;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-letter-spacing: 0.03em;
      -moz-letter-spacing: 0.03em;
      -ms-letter-spacing: 0.03em;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0;
      -webkit-transition: background-color 0.2s,opacity 0.2s;
      transition: background-color 0.2s,opacity 0.2s;
      height: 48px;
      padding: 0 24px;
      background-color: transparent;
      color: #23caca;
      box-shadow: none;
    }

    .c21:hover:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c21:active:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c21:disabled,
    .c21.dsentr-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    .c4 {
      color: #280D5F;
      padding: 0 8px;
      border-radius: 8px;
    }

    .c6 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .c6 .mobile-icon {
      width: 32px;
    }

    .c6 .desktop-icon {
      width: 160px;
      display: none;
    }

    .c6 .right-eye {
      -webkit-animation-delay: 20ms;
      animation-delay: 20ms;
    }

    .c6:hover .left-eye,
    .c6:hover .right-eye {
      -webkit-transform-origin: center 60%;
      -ms-transform-origin: center 60%;
      transform-origin: center 60%;
      -webkit-animation-name: bEBzQK;
      animation-name: bEBzQK;
      -webkit-animation-duration: 350ms;
      animation-duration: 350ms;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
    }

    .c18 {
      color: #BF0000;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
    }

    .c14 {
      color: transparent;
      -webkit-transition: color 0.4s;
      transition: color 0.4s;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    }

    .c12 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 32px;
      font-size: 14px;
      background-color: #FAF9FA;
      color: #7A6EAA;
      box-shadow: inset 4px 0px 0px #23caca;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c12 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c12 svg {
      fill: #7A6EAA;
    }

    .c12:hover {
      background-color: #EFF4F5;
    }

    .c12.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E5FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c16 {
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 48px;
      padding: 0 32px;
      font-size: 14px;
      background-color: #FAF9FA;
      color: #7A6EAA;
      box-shadow: none;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c16 a {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .c16 svg {
      fill: #7A6EAA;
    }

    .c16:hover {
      background-color: #EFF4F5;
    }

    .c16.rainbow {
      background-clip: text;
      -webkit-animation: fKQuCC 3s ease-in-out infinite;
      animation: fKQuCC 3s ease-in-out infinite;
      background: linear-gradient(139.73deg,#E5FDFF 0%,#F3EFFF 100%);
      background-size: 400% 100%;
    }

    .c19 {
      border-radius: 16px;
      padding: 0 8px;
      border: 2px solid;
      border-color: color:#BF0000;
      box-shadow: none;
      color: color:#BF0000;
      margin-left: 8px;
    }

    .c15 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c17 {
      max-height: 0;
      -webkit-transition: max-height 0.3s ease-out;
      transition: max-height 0.3s ease-out;
      overflow: hidden;
      border-color: transparent;
      border-style: solid;
      border-width: 1px 0;
    }

    .c11 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
    }

    .c22 {
      padding: 0;
      width: 48px;
    }

    .c20 {
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      padding: 8px 4px;
      background-color: #FFFFFF;
      border-top: solid 2px rgba(133,133,133,0.1);
    }

    .c10 {
      position: fixed;
      padding-top: 80px;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      background-color: #FFFFFF;
      width: 0;
      height: 100%;
      -webkit-transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: padding-top 0.2s,width 0.2s cubic-bezier(0.4,0,0.2,1);
      border-right: 0;
      z-index: 11;
      overflow: hidden;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      white-space: nowrap;
    }

    .c0 {
      position: relative;
      width: 100%;
    }

    .c1 {
      position: fixed;
      top: 0;
      left: 0;
      -webkit-transition: top 0.2s;
      transition: top 0.2s;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 8px;
      padding-right: 16px;
      width: 100%;
      height: 64px;
      background-color: #FFFFFF;
      border-bottom: solid 2px rgba(133,133,133,0.1);
      z-index: 20;
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    .c9 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
    }

    .c23 {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-top: 64px;
      -webkit-transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      transition: margin-top 0.2s,margin-left 0.2s cubic-bezier(0.4,0,0.2,1);
      -webkit-transform: translate3d(0,0,0);
      -ms-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
      max-width: 100%;
    }

    .c25 {
      position: fixed;
      height: 100%;
    }

    @media screen and (min-width:968px) {
      .c6 .mobile-icon {
        display: none;
      }
    }

    @media screen and (min-width:968px) {
      .c6 .desktop-icon {
        display: block;
      }
    }

    @media screen and (min-width:968px) {
      .c10 {
        border-right: 2px solid rgba(133,133,133,0.1);
        width: 56px;
      }
    }

    @media screen and (min-width:968px) {
      .c23 {
        margin-left: 56px;
        max-width: calc(100% - 56px);
      }
    }

    @media screen and (min-width:968px) {
      .c25 {
        display: none;
      }
    }

    <div
        class="c0"
      >
        <nav
          class="c1"
        >
          <div
            class="c2"
          >
            <button
              aria-label="Toggle menu"
              class="c3 c4"
              scale="md"
            >
              <svg
                class="c5"
                color="textSubtle"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"
                />
              </svg>
            </button>
            <a
              aria-label="DSentr home page"
              class="c6"
              href="/"
            >
              <svg
                class="c7 mobile-icon"
                color="text"
                viewBox="0 0 26.005 26.005"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.758,22.499c-5.376,0-9.75-4.374-9.75-9.75s4.374-9.75,9.75-9.75s9.75,4.374,9.75,9.75     c0,1.966-0.589,3.794-1.595,5.328l1.394,1.393l1.309-0.067c1.192-1.939,1.895-4.213,1.895-6.652C25.51,5.72,19.79,0,12.76,0     C5.73,0,0.01,5.72,0.01,12.75c0,7.029,5.72,12.75,12.75,12.75c2.439,0,4.713-0.701,6.652-1.895l0.067-1.308l-1.395-1.395     C16.552,21.909,14.724,22.499,12.758,22.499z"
                  data-original="#000000"
                  fill="#7220c4"
                  opacity="0.6"
                />
                <path
                  d="M19.218,16.381c0.607-1.075,0.957-2.312,0.957-3.632c0-4.09-3.328-7.417-7.417-7.417S5.341,8.66,5.341,12.749     s3.328,7.417,7.417,7.417c1.32,0,2.558-0.351,3.632-0.957l-2.277-2.278c-0.43,0.142-0.879,0.235-1.355,0.235     c-2.436,0-4.417-1.981-4.417-4.417c0-2.436,1.981-4.417,4.417-4.417c2.437,0,4.417,1.981,4.417,4.417     c0,0.476-0.096,0.925-0.234,1.354L19.218,16.381z"
                  data-original="#000000"
                  fill="#20c4c4"
                  opacity="0.9"
                />
                <path
                  d="M13.758,11.749c0.401,0,0.784,0.117,1.11,0.336c-0.284-0.901-1.116-1.558-2.11-1.558c-1.227,0-2.222,0.995-2.222,2.222     c0,0.995,0.659,1.828,1.561,2.11c-0.52-0.776-0.438-1.838,0.248-2.524C12.722,11.957,13.224,11.749,13.758,11.749z"
                  data-original="#000000"
                  fill="#7220c4"
                  opacity="0.3"
                />
              </svg>
              <svg
                class="c7 desktop-icon"
                color="text"
                viewBox="0 0 160 26"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg
                  viewBox="0 0 160 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    height="100.502"
                    transform="matrix(1, 0, 0, 1, 8.462568, 0.241461)"
                    width="800.767"
                    x="10.539"
                    y="425.626"
                  >
                    <g
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M12.758,22.499c-5.376,0-9.75-4.374-9.75-9.75s4.374-9.75,9.75-9.75s9.75,4.374,9.75,9.75     c0,1.966-0.589,3.794-1.595,5.328l1.394,1.393l1.309-0.067c1.192-1.939,1.895-4.213,1.895-6.652C25.51,5.72,19.79,0,12.76,0     C5.73,0,0.01,5.72,0.01,12.75c0,7.029,5.72,12.75,12.75,12.75c2.439,0,4.713-0.701,6.652-1.895l0.067-1.308l-1.395-1.395     C16.552,21.909,14.724,22.499,12.758,22.499z"
                          data-original="#000000"
                          fill="#7220c4"
                          opacity="0.6"
                        />
                        <path
                          d="M19.218,16.381c0.607-1.075,0.957-2.312,0.957-3.632c0-4.09-3.328-7.417-7.417-7.417S5.341,8.66,5.341,12.749     s3.328,7.417,7.417,7.417c1.32,0,2.558-0.351,3.632-0.957l-2.277-2.278c-0.43,0.142-0.879,0.235-1.355,0.235     c-2.436,0-4.417-1.981-4.417-4.417c0-2.436,1.981-4.417,4.417-4.417c2.437,0,4.417,1.981,4.417,4.417     c0,0.476-0.096,0.925-0.234,1.354L19.218,16.381z"
                          data-original="#000000"
                          fill="#20c4c4"
                          opacity="0.9"
                        />
                        <path
                          d="M13.758,11.749c0.401,0,0.784,0.117,1.11,0.336c-0.284-0.901-1.116-1.558-2.11-1.558c-1.227,0-2.222,0.995-2.222,2.222     c0,0.995,0.659,1.828,1.561,2.11c-0.52-0.776-0.438-1.838,0.248-2.524C12.722,11.957,13.224,11.749,13.758,11.749z"
                          data-original="#000000"
                          fill="#7220c4"
                          opacity="0.3"
                        />
                      </g>
                    </g>
                  </g>
                  <text
                    fill="rgb(51, 51, 51)"
                    font-family="Archivo"
                    font-size="28px"
                    font-weight="900"
                    transform="matrix(1, 0, 0, 0.827321, -8.256603, 13.381808)"
                    x="50.889"
                    y="9.498"
                  >
                    DSentr
                  </text>
                </svg>
              </svg>
            </a>
          </div>
          <div
            class="c2"
          >
            <div>
              <button
                class="c8"
                scale="sm"
              >
                0xbd...c980
              </button>
            </div>
          </div>
        </nav>
        <div
          class="c9"
        >
          <div
            class="c10"
          >
            <div
              class="c11"
            >
              <div
                class="c12"
              >
                <a
                  aria-current="page"
                  class="active"
                  href="/"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 495 495"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                    />
                    <path
                      d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Home
                  </div>
                </a>
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18,10a1,1,0,0,0-1-1H5.41l2.3-2.29A1,1,0,0,0,6.29,5.29l-4,4a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,11H17A1,1,0,0,0,18,10Zm3.92,3.62A1,1,0,0,0,21,13H7a1,1,0,0,0,0,2H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.92,13.62Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Exchange
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c16"
              >
                <a
                  href="/liquidity"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 275 275"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <polygon
                        points="112.547,193.338 189.496,96.326 121.505,76.654 73.794,168.075"
                      />
                      <path
                        d="M245.533,98.092c-6.493-5.149-15.926-4.061-21.073,2.431L119.064,233.398l-84.465-55.063l78.524-150.462c3.833-7.345,0.986-16.405-6.357-20.238c-7.349-3.837-16.408-0.983-20.238,6.357L1.704,176.526c-3.573,6.847-1.364,15.288,5.106,19.506l107.321,69.962c6.49,4.231,15.129,2.824,19.944-3.244l113.889-143.585C253.112,112.675,252.023,103.24,245.533,98.092z"
                      />
                      <path
                        d="M259.359,158.702c-8.284,0-15,23.716-15,32c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15C274.359,182.417,267.643,158.702,259.359,158.702z"
                      />
                    </g>
                  </svg>
                  <div
                    class="c14"
                  >
                    Liquidity
                  </div>
                  <div
                    class="c18 c19"
                    color="failure"
                    font-size="14px"
                  >
                    LIVE
                  </div>
                </a>
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 417 417"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,81.371-81.552,213.379-0.181,294.85c81.369,81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,142.626,356.004,61.156z M237.6,340.786c0,3.217-2.607,5.822-5.822,5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,2.607-5.822,5.822-5.822h46.576c3.215,0,5.822,2.604,5.822,5.822V340.786z M208.49,137.901c-18.618,0-33.766-15.146-33.766-33.765c0-18.617,15.147-33.766,33.766-33.766c18.619,0,33.766,15.148,33.766,33.766C242.256,122.755,227.107,137.901,208.49,137.901z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    Info
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 266 266"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M266.514,71.605h-20.717l-88.02-46.787c-2.219-11.531-12.352-20.277-24.519-20.277c-12.521,0-22.828,9.284-24.623,21.316L30.105,71.605H0v190.367h266.514V71.605z M133.257,15.42c7.8,0,14.12,6.32,14.12,14.12c0,4.656-2.284,8.751-5.76,11.324c-2.344,1.735-5.216,2.796-8.36,2.796c-2.91,0-5.613-0.881-7.859-2.393c-3.775-2.535-6.26-6.837-6.26-11.727C119.137,21.74,125.457,15.42,133.257,15.42z M115.466,47.053c4.536,4.607,10.829,7.484,17.791,7.484c7.343,0,13.891-3.242,18.466-8.3l47.722,25.368H73.324L115.466,47.053z M228.441,223.899H38.073v-114.22h190.367V223.899z"
                      />
                    </g>
                  </svg>
                  <div
                    class="c14"
                  >
                    ILPO
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
              <div
                class="c15"
              >
                <div
                  class="c16"
                  role="button"
                >
                  <svg
                    class="c13"
                    color="text"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                    />
                  </svg>
                  <div
                    class="c14"
                  >
                    More
                  </div>
                  <svg
                    class="c7"
                    color="text"
                    viewBox="0 0 24 24"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
                    />
                  </svg>
                </div>
                <div
                  class="c17"
                />
              </div>
            </div>
            <div
              class="c20"
            >
              <button
                class="c21 c22"
                scale="md"
              >
                <svg
                  class="c7"
                  color="text"
                  viewBox="0 0 24 24"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="c23"
          >
            body
          </div>
          <div
            class="c24 c25"
            role="presentation"
          />
        </div>
      </div>
    </DocumentFragment>
  `)
})
