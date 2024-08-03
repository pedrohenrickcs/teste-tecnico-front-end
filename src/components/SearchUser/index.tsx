import Image from 'next/image'

const SearchUser = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] text-gray-neutral px-1">
      <div className="text-center">
        <h2 className="text-xl font-semibold">
          Procure pelo Nome ou Nome de Usuário
        </h2>
        <h3 className="text-base font-normal">
          Encontre os repositórios de algum usuário digitando no campo acima
        </h3>
      </div>
      <Image
        src="/assets/img_01.png"
        width={230}
        height={230}
        alt="Procure pelo Nome ou Nome de Usuário"
        className="m-12"
      />
    </div>
  )
}

export default SearchUser
