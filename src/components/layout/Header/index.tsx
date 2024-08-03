import Icon from '@/components/icons/icons'
import { IconsEnum } from '@/enums/IconsEnum'
import Link from 'next/link'
import { ChangeEvent } from 'react'

export type HeaderProps = {
  setUser: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<HeaderProps> = ({ setUser }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value)
  }

  return (
    <header className="w-full">
      <div className="border-b border-border-and-line flex justify-end md:justify-between">
        <div className="flex w-full md:w-5/12 relative">
          <input
            placeholder="Buscar usuário"
            className=" border border-border-and-line text-placeholder rounded b-width w-full md:w-full p-2 m-5 focus:outline-none"
            onChange={handleInputChange}
          />
          <Icon
            name={IconsEnum.Search}
            className="fill-placeholder absolute right-8 top-7"
          />
        </div>
        <Link
          href="/favoritos"
          className="bg-primary-color text-white-text p-5 flex items-center"
        >
          <Icon name={IconsEnum.HeartO} className="fill-white-text mr-2" />
          Favoritos
        </Link>
      </div>
    </header>
  )
}

export default Header
