import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Text from '../../components/Text/Text'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Text>dsentr</Text>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      color: #280D5F;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    <div
        class="c0"
        color="text"
      >
        dsentr
      </div>
    </DocumentFragment>
  `)
})
