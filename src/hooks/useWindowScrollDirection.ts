import { useEffect, useState } from 'react'

interface WindowScrollDirection {
  y: number,
  isUp: boolean
}

function useWindowScrollDirection (): WindowScrollDirection {
  const [windowScrollDirection, setWindowScrollDirection] = useState<WindowScrollDirection>({
    y: typeof window === 'object' ? window.pageYOffset : 0,
    isUp: true
  })

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrollDirection(prev => ({
        y: window.pageYOffset,
        isUp: prev.y > window.pageYOffset
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return windowScrollDirection
}

export default useWindowScrollDirection
