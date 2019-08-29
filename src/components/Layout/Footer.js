import cx from "classnames"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GoMail, GoMarkGithub } from "react-icons/go"

import Avatar from "~components/Avatar"
import LayoutContainer from "~components/Layout/Container"
import useWindowScrollDirection from "~hooks/useWindowScrollDirection"

export default () => {
  const { isUp } = useWindowScrollDirection()
  return (
    <Footer className={cx({ "hide": !isUp })}>
      <LayoutContainer>
        © 2019 Hwangmok Cho
        <ContactList>
          <Contact
            href="https://github.com/spriteye"
            title="GitHub"
          >
            <GoMarkGithub />
          </Contact>
          <Contact
            href="mailto:spriteye@gmail.com"
            title="spriteye@gmail.com"
          >
            <GoMail />
          </Contact>
          <Contact
            href="https://www.buymeacoffee.com/mNtBzyAFU"
            title="Buy me a coffee"
          >
            <img
              src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg"
              alt="Buy me a coffee"
            />
          </Contact>
          <Me
            to="/about"
            title="About me"
          >
            <Avatar />
          </Me>
        </ContactList>
      </LayoutContainer>
    </Footer>
  )
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  border-top: 1px solid #eee;
  width: 100vw;
  height: 2.5rem;
  transition: bottom 0.4s ease;

  background-color: white;

  font-size: 0.75em;

  @media (max-width: 500px) {
    &.hide {
      bottom: -2.5rem;
    }
  }
`

const ContactList = styled.div`
  display: flex;
  align-items: center;
`

const Contact = styled.a`
  display: inline-flex;
  width: 1.85rem;
  justify-content: center;

  font-size: 1.2rem;

  opacity: .5;

  &:hover {
    opacity: 1;
  }
`

const Me = styled(Link)`
  display: inline-flex;
  width: 1.85rem;
  justify-content: center;

  opacity: .5;

  &:hover {
    opacity: 1;
  }
`
