import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import FallingGlass from '../../components/FallingGlass/FallingGlass'

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5)
})

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore()
})

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<FallingGlass count={1} />)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c1 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center;
      fill: #280D5F;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
    }

    .c0 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      position: fixed;
      top: 0;
      left: 50vw;
      -webkit-transform: translate3d(0,-100%,0);
      -ms-transform: translate3d(0,-100%,0);
      transform: translate3d(0,-100%,0);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: none;
      z-index: 99999;
      -webkit-animation-name: dphWuA;
      animation-name: dphWuA;
      -webkit-animation-duration: 10s;
      animation-duration: 10s;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-play-state: running;
      animation-play-state: running;
    }

    .c0:nth-child(5n + 5) {
      -webkit-animation-delay: 1.3s;
      animation-delay: 1.3s;
    }

    .c0:nth-child(3n + 2) {
      -webkit-animation-delay: 1.5s;
      animation-delay: 1.5s;
    }

    .c0:nth-child(2n + 5) {
      -webkit-animation-delay: 1.7s;
      animation-delay: 1.7s;
    }

    .c0:nth-child(3n + 10) {
      -webkit-animation-delay: 2.7s;
      animation-delay: 2.7s;
    }

    .c0:nth-child(7n + 2) {
      -webkit-animation-delay: 3.5s;
      animation-delay: 3.5s;
    }

    .c0:nth-child(4n + 5) {
      -webkit-animation-delay: 5.5s;
      animation-delay: 5.5s;
    }

    .c0:nth-child(3n + 7) {
      -webkit-animation-delay: 8s;
      animation-delay: 8s;
    }

    <div>
        <div
          class="c0"
        >
          <svg
            class="c1"
            color="text"
            height="32"
            viewBox="0 0 512 512"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <lineargradient
                id="svg_22"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop
                  offset="0"
                  stop-color="#7220c4"
                  stop-opacity="0.99609"
                />
                <stop
                  offset="1"
                  stop-color="#d1b0f2"
                  stop-opacity="0.98828"
                />
              </lineargradient>
              <lineargradient
                id="svg_24"
                x1="0"
                x2="1"
                y1="0"
                y2="0"
              >
                <stop
                  offset="0"
                  stop-color="#20c4c4"
                  stop-opacity="0.99219"
                />
                <stop
                  offset="1"
                  stop-color="#9ef7f7"
                  stop-opacity="0.97266"
                />
              </lineargradient>
            </defs>
            <g
              transform="matrix(1.147712, 0, 0, 1.146106, -0.223765, -4.991493)"
            >
              <g
                id="svg_26"
                transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 217.536072, -89.428864)"
              >
                <rect
                  fill="url(#svg_22)"
                  height="301"
                  id="svg_12"
                  stroke="#000"
                  width="310"
                  x="65"
                  y="69.5"
                />
                <rect
                  fill="url(#svg_24)"
                  height="147"
                  id="svg_16"
                  stroke="#000"
                  transform="rotate(180 142.5 143)"
                  width="155.00001"
                  x="65"
                  y="69.5"
                />
                <rect
                  fill="url(#svg_24)"
                  height="155"
                  id="svg_17"
                  stroke="#000"
                  transform="rotate(90 297.5 293.5)"
                  width="153.99999"
                  x="220.5"
                  y="216.00001"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </DocumentFragment>
  `)
})
