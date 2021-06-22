import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Button from '../../components/Button/Button'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Button>Submit</Button>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
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
      background-color: #23caca;
      color: white;
    }

    .c0:hover:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled):not(:active) {
      opacity: 0.65;
    }

    .c0:active:not(:disabled):not(.dsentr-button--disabled):not(.dsentr-button--disabled) {
      opacity: 0.85;
      -webkit-transform: translateY(1px);
      -ms-transform: translateY(1px);
      transform: translateY(1px);
      box-shadow: none;
    }

    .c0:disabled,
    .c0.dsentr-button--disabled {
      background-color: #E9EAEB;
      border-color: #E9EAEB;
      box-shadow: none;
      color: #BDC2C4;
      cursor: not-allowed;
    }

    <button
        class="c0"
        scale="md"
      >
        Submit
      </button>
    </DocumentFragment>
  `)
})
