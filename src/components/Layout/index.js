import React from "react"

import LayoutFooter from "~components/Layout/Footer"
import LayoutHeader from "~components/Layout/Header"
import LayoutMain from "~components/Layout/Main"
import GlobalStyle from "~styles/GlobalStyle"

export default ({ children }) => (
  <>
    <GlobalStyle />
    <LayoutHeader />
    <LayoutMain children={children} />
    <LayoutFooter />
  </>
)
