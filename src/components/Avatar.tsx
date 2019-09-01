import React from 'react'
import styled from 'styled-components'

interface AvaterProps {
  size?: string
}

const Avatar: React.FC<AvaterProps> = ({ size = '1.5rem' }: AvaterProps) => {
  const Container = styled.div`
    display: flex;
    width: ${size};
    height: ${size};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  `

  const Image = styled.img`
    width: ${size};
    height: ${size};
    border-radius: 50%;
  `

  return (
    <Container>
      <Image alt='Hwangmok Cho' src='/images/me.png' />
    </Container>
  )
}

export default Avatar
