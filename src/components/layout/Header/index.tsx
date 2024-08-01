import Icon from '@/components/icons/icons'
import { IconsEnum } from '@/enums/IconsEnum'

const Header = () => {
  return (
    <header className="w-full">
      <div className="border-b border-border-and-line flex justify-end md:justify-between">
        <div className="flex md:w-5/12 relative">
          <input
            placeholder="Buscar usuário"
            className=" border border-border-and-line text-placeholder rounded b-width w-full md:w-full p-2 m-5 focus:outline-none"
          />
          <Icon
            name={IconsEnum.Search}
            color="#8C8C8C"
            className="absolute right-8 top-7"
          />
        </div>
        <button className="bg-primary-color text-white-text p-5">
          Favoritos
        </button>
      </div>
    </header>
  )
}

export default Header
