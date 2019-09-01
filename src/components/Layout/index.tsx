import React from "react"

import LayoutFooter from "~components/Layout/Footer"
import LayoutHeader from "~components/Layout/Header"
import LayoutMain from "~components/Layout/Main"
import GlobalStyle from "~styles/GlobalStyle"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <LayoutHeader />
    <LayoutMain children={children} />
    <LayoutFooter />
  </>
)

export default Layout
