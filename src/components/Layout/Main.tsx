import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  max-width: 50rem;
  margin: auto;
  margin-bottom: 2.5rem;
  padding: 1rem 1.5rem;
`

interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }: MainProps) => (
  <StyledMain>
    {children}
  </StyledMain>
)

export default Main
