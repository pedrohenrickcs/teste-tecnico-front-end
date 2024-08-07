'use client'

import { Loading } from '@/components/common/Loading'
import { Profile } from '@/components/ContentSection/Profile'
import { Repos } from '@/components/ContentSection/Repos'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SearchInfo } from '@/components/SearchInfo'
import { useFavorites } from '@/context/FavoritesContext'
import { useData } from '@/hooks/useData'
import { RepoProps } from '@/types/Repos'

const Favorites = () => {
  const { favorites } = useFavorites()
  const { user, setUser, data, loading, hasSearched, setHasSearched } =
    useData()
  const isDataArray = Array.isArray((data as RepoProps)?.repos)
  const showSearchEmpty = !loading && hasSearched && !isDataArray

  return (
    <div>
      <Header setUser={setUser} setHasSearched={setHasSearched} />

      {showSearchEmpty && (
        <SearchInfo
          termSearch={`"${user}"`}
          title="Nenhum usuário encontrado"
          description="Verifique se a escrita está correta ou tente novamente"
          imageSrc="/assets/img_02.png"
          setUser={setUser}
        />
      )}

      {!isDataArray && (
        <div className="flex flex-col justify-start items-center h-[90vh] mt-4 md:mt-28 text-gray-neutral px-5 md:px-1">
          {favorites.length === 0 ? (
            <p>Você ainda não adicionou nenhum repositório aos favoritos.</p>
          ) : (
            <Repos repos={favorites} title="Meus Favoritos" />
          )}
        </div>
      )}

      {!loading && isDataArray && (data as RepoProps)?.repos.length > 0 && (
        <div className="flex w-full my-8 md:my-28 px-6 flex-col justify-between md:flex-row">
          <Profile profile={(data as RepoProps)?.profile} />
          <Repos repos={(data as RepoProps)?.repos} title="Repositórios" />
        </div>
      )}

      <Footer />

      {loading && <Loading />}
    </div>
  )
}

export default Favorites
