import Link from 'next/link'
import Icon from '@/components/icons/icons'
import { IconsEnum } from '@/enums/IconsEnum'
import Input from '@/components/common/Input'
import { HeaderProps } from '@/types/Header'

export const Header: React.FC<HeaderProps> = ({ setUser }) => {
  return (
    <header className="w-full fixed top-0 z-50 bg-white-background">
      <div className="hidden md:flex border-b border-border-and-line justify-end md:justify-between">
        <Input setUser={setUser} />
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
