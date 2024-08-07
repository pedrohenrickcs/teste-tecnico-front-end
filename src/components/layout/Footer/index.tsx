import { useEffect, useState } from 'react'
import Icon from '@/components/icons/icons'
import { IconsEnum } from '@/enums/IconsEnum'

export const Footer = () => {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  return (
    <footer className="inline-flex w-full md:hidden fixed bottom-0 border-t border-border-and-line">
      <a
        href="/"
        className={`w-1/2 py-6 flex justify-center ${currentPath === '/' ? 'bg-primary-color' : 'bg-white-background'}`}
      >
        <Icon
          name={IconsEnum.User}
          className={`${currentPath === '/' ? 'fill-white-background' : 'fill-placeholder'}`}
        />
      </a>
      <a
        href="/favoritos"
        className={`w-1/2 py-6 flex justify-center ${currentPath === '/favoritos' ? 'bg-primary-color' : 'bg-white-background'}`}
      >
        <Icon
          name={IconsEnum.Heart}
          className={`${currentPath === '/favoritos' ? 'fill-white-background' : 'fill-placeholder'}`}
        />
      </a>
    </footer>
  )
}
