import React from "react"
import styled from "styled-components"

export default ({ children }) => (
  <Main>
    {children}
  </Main>
)

const Main = styled.main`
  max-width: 50rem;
  margin: auto;
  margin-bottom: 2.5rem;
  padding: 1rem 1.5rem;
`
