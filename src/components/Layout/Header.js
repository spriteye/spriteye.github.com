import cx from "classnames"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import LayoutContainer from "~components/Layout/Container"
import useWindowScrollDirection from "~hooks/useWindowScrollDirection"

export default () => {
  const { isUp  } = useWindowScrollDirection()
  return (
    <Header className={cx({ "hide": !isUp  })}>
      <LayoutContainer>
        <Title to="/">spriteye</Title>
      </LayoutContainer>
    </Header>
  )
}

const Header = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  height: 3.5rem;
  border-bottom: 1px solid #eee;
  transition: top 0.4s ease;

  background-color: white;

  @media (max-width: 500px) {
    &.hide {
      top: -3.5rem;
    }
  }
`

const Title = styled(Link)`
  display: flex;

  color: hotpink;

  font-family: Monoton;
  font-size: 1.8rem;
`
