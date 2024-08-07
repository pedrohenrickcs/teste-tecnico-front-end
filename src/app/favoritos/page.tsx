'use client'

import { Repos } from '@/components/ContentSection/Repos'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { useFavorites } from '@/context/FavoritesContext'

const Favorites = () => {
  const { favorites } = useFavorites()

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-start items-center h-[90vh] mt-4 md:mt-28 text-gray-neutral px-5 md:px-1">
        {favorites.length === 0 ? (
          <p>Você ainda não adicionou nenhum repositório aos favoritos.</p>
        ) : (
          <Repos repos={favorites} title="Meus Favoritos" />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Favorites
