import React from 'react'
import styled from 'styled-components'

import {TestButton as TestButtonFromLib} from "@test/ui";

const TestButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`

export default function Button({children}) {
  return (
      <>
        <TestButtonFromLib>{children}</TestButtonFromLib>
        <TestButton>
          {children}
        </TestButton>
      </>
  );
}
