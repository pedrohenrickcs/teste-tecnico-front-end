'use client'

import { Header } from '@/components/layout/Header'
import { Repos } from '@/components/ContentSection/Repos'
import { Profile } from '@/components/ContentSection/Profile'
import { useData } from '@/hooks/useData'
import { RepoProps } from '@/types/Repos'
import { SearchInfo } from '@/components/SearchInfo'
import { Footer } from '@/components/layout/Footer'
import { Loading } from '@/components/common/Loading'

export default function Home() {
  const { user, setUser, data, loading, hasSearched, setHasSearched } =
    useData()

  const isDataArray = Array.isArray((data as RepoProps)?.repos)
  const showSearchEmpty = !loading && hasSearched && !isDataArray
  const showSearchInfo = !loading && !hasSearched

  return (
    <main className="flex flex-col items-center justify-between">
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

      {showSearchInfo && (
        <SearchInfo
          title="Procure pelo Nome ou Nome de Usuário"
          description="Encontre os repositórios de algum usuário digitando no campo acima"
          imageSrc="/assets/img_01.png"
          setUser={setUser}
        />
      )}

      {!loading && isDataArray && (data as RepoProps)?.repos.length > 0 && (
        <div className="flex w-full my-8 md:my-28 px-6 flex-col justify-between md:flex-row">
          <Profile profile={(data as RepoProps)?.profile} />
          <Repos repos={(data as RepoProps)?.repos} title="Repositórios" />
        </div>
      )}

      <Footer />

      {loading && <Loading />}
    </main>
  )
}
