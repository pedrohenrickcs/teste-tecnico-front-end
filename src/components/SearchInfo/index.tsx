import Image from 'next/image'
import { FC } from 'react'
import Input from '@/components/common/Input'

export type SearchProps = {
  termSearch?: string
  title: string
  description: string
  imageSrc: string
  setUser?: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInfo: FC<SearchProps> = ({
  termSearch,
  title,
  description,
  imageSrc,
  setUser,
}) => {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center h-[90vh] text-gray-neutral px-5 py-8 md:py-0 md:px-1">
      <div className="text-left md:text-center">
        {termSearch && (
          <span className="text-xl text-primary-color font-semibold flex justify-center">
            {termSearch}
          </span>
        )}
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="text-base font-normal">{description}</h3>

        <div className="flex md:hidden">
          <Input setUser={setUser} />
        </div>
      </div>
      <Image
        src={imageSrc}
        width={230}
        height={230}
        alt={title}
        className="m-12 hidden md:flex"
      />
    </div>
  )
}
