import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import LayoutContainer from "~components/Layout/Container"

export default () => (
  <Header>
    <LayoutContainer>
      <Title to="/">spriteye</Title>
    </LayoutContainer>
  </Header>
)

const Header = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  height: 3.5rem;
  border-bottom: 1px solid #eee;

  background-color: white;
`

const Title = styled(Link)`
  display: flex;

  color: hotpink;

  font-family: Monoton;
  font-size: 1.8rem;
`
