import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import React, { useContext } from "react"
import Switch from "react-switch"
import styled from "styled-components"
import { IoMdMoon, IoMdSunny } from "react-icons/io"

export default () => {
  const { isDark, toggleDark }= useContext(ThemeManagerContext)
  return (
    <Switch
      checked={!isDark}
      onChange={toggleDark}
      onColor="#0f1114"
      offColor="#0f1114"
      height={25}
      width={50}
      checkedIcon={<Icon><IoMdSunny /></Icon>}
      uncheckedIcon={<Icon><IoMdMoon /></Icon>}
    />
  )
}

const Icon = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  color: yellow;

  font-size: 1rem;
`