import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'
import React, { useContext } from 'react'
import Switch from 'react-switch'
import styled from 'styled-components'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: yellow;
  font-size: 1rem;
`

const ThemeSwitch: React.FC = () => {
  const { isDark, toggleDark } = useContext(ThemeManagerContext)
  return (
    <Switch
      checked={!isDark}
      onChange={toggleDark}
      onColor='#0f1114'
      offColor='#0f1114'
      height={25}
      width={50}
      checkedIcon={<StyledIcon><IoMdSunny /></StyledIcon>}
      uncheckedIcon={<StyledIcon><IoMdMoon /></StyledIcon>}
    />
  )
}

export default ThemeSwitch
