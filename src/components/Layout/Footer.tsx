import cx from 'classnames'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { GoMail, GoMarkGithub } from 'react-icons/go'

import Avatar from '~components/Avatar'
import LayoutContainer from '~components/Layout/Container'
import useWindowScrollDirection from '~hooks/useWindowScrollDirection'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;

  display: flex;
  width: 100vw;
  height: 2.5rem;

  font-size: 0.75em;

  background-color: ${({ theme }) => theme.bg};
  border-top: 1px solid #eee;

  transition: bottom 0.4s ease, ${({ theme }) => theme.themeTransition};

  @media (max-width: 500px) {
    &.hide {
      bottom: -2.5rem;
    }
  }
`

const StyledContactList = styled.div`
  display: flex;
  align-items: center;
`

const StyledContact = styled.a`
  display: inline-flex;
  justify-content: center;
  width: 1.85rem;

  font-size: 1.2rem;

  opacity: .5;

  &:hover {
    opacity: 1;
  }
`

const StyledMe = styled(Link)`
  display: inline-flex;
  justify-content: center;
  width: 1.85rem;

  opacity: .5;

  &:hover {
    opacity: 1;
  }
`

const Footer: React.FC = () => {
  const { isUp } = useWindowScrollDirection()
  return (
    <StyledFooter className={cx({ hide: !isUp })}>
      <LayoutContainer>
        © 2019 Hwangmok Cho
        <StyledContactList>
          <StyledContact
            href='https://github.com/spriteye'
            title='GitHub'
          >
            <GoMarkGithub />
          </StyledContact>
          <StyledContact
            href='mailto:spriteye@gmail.com'
            title='spriteye@gmail.com'
          >
            <GoMail />
          </StyledContact>
          <StyledContact
            href='https://www.buymeacoffee.com/mNtBzyAFU'
            title='Buy me a coffee'
          >
            <img
              src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg'
              alt='Buy me a coffee'
            />
          </StyledContact>
          <StyledMe
            to='/about'
            title='About me'
          >
            <Avatar />
          </StyledMe>
        </StyledContactList>
      </LayoutContainer>
    </StyledFooter>
  )
}

export default Footer
