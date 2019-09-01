import cx from "classnames"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import LayoutContainer from "~components/Layout/Container"
import ThemeSwitch from "~components/ThemeSwitch"
import useWindowScrollDirection from "~hooks/useWindowScrollDirection"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  display: flex;
  height: 3.5rem;
  border-bottom: 1px solid #eee;
  transition: top 0.4s ease, ${({ theme }) => theme.themeTransition};

  background-color: ${({ theme }) => theme.bg};

  @media (max-width: 500px) {
    &.hide {
      top: -3.5rem;
    }
  }
`

const StyledTitle = styled(Link)`
  display: flex;

  color: hotpink;

  font-family: Monoton;
  font-size: 1.8rem;
`

const Header: React.FC = () => {
  const { isUp  } = useWindowScrollDirection()
  return (
    <StyledHeader className={cx({ "hide": !isUp  })}>
      <LayoutContainer>
        <StyledTitle to="/">spriteye</StyledTitle>
        <ThemeSwitch />
      </LayoutContainer>
    </StyledHeader>
  )
}

export default Header
