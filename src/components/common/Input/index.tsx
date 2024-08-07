import Icon from '@/components/icons/icons'

import { HeaderProps } from '@/components/layout/Header'
import { IconsEnum } from '@/enums/IconsEnum'
import { ChangeEvent } from 'react'

const Input: React.FC<HeaderProps> = ({ setUser }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setUser) setUser(e.target.value)
  }

  return (
    <div className="flex w-full md:w-5/12 relative">
      <input
        placeholder="Buscar usuário"
        className="border border-border-and-line text-placeholder rounded b-width w-full md:w-full p-2 my-5 md:m-5 focus:outline-none"
        onChange={handleInputChange}
      />
      <Icon
        name={IconsEnum.Search}
        className="fill-placeholder absolute right-3 md:right-8 top-7"
      />
    </div>
  )
}

export default Input
