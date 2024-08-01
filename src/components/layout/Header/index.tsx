const Header = () => {
  return (
    <header className="w-full">
      <div className="border-b border-border-and-line flex justify-between">
        <input
          placeholder="Buscar usuário"
          className=" border border-border-and-line text-placeholder rounded b-width w-5/12 p-2 m-5 focus:outline-none"
        />
        <button className="bg-primary-color text-white-text p-5">
          Favoritos
        </button>
      </div>
    </header>
  )
}

export default Header
