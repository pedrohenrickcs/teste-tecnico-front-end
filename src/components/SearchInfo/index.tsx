import Image from 'next/image'

export type SearchProps = {
  termSearch?: string
  title: string
  description: string
  imageSrc: string
}

export const SearchInfo = ({
  termSearch,
  title,
  description,
  imageSrc,
}: SearchProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] text-gray-neutral px-1">
      <div className="text-center">
        {termSearch && (
          <span className="text-xl text-primary-color font-semibold">
            {termSearch}
          </span>
        )}
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="text-base font-normal">{description}</h3>
      </div>
      <Image
        src={imageSrc}
        width={230}
        height={230}
        alt={title}
        className="m-12"
      />
    </div>
  )
}
