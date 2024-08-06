'use client'

import { Repos } from '@/components/ContentSection/Repos'
import Header from '@/components/layout/Header'
import { useFavorites } from '@/context/FavoritesContext'
import { useData } from '@/hooks/useData'

const Favorites = () => {
  const { setUser } = useData()
  const { favorites } = useFavorites()

  return (
    <div>
      <Header setUser={setUser} />
      <div className="flex flex-col justify-start items-center h-[90vh] mt-6 text-gray-neutral px-1">
        {favorites.length === 0 ? (
          <p>Você ainda não adicionou nenhum repositório aos favoritos.</p>
        ) : (
          <Repos repos={favorites} title="Meus Favoritos" />
        )}
      </div>
    </div>
  )
}

export default Favorites
