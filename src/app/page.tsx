'use client'

import Header from '@/components/layout/Header'
import Loading from '@/components/common/Loading'
import { Repos } from '@/components/ContentSection/Repos'
import { Profile } from '@/components/ContentSection/Profile'
import { useData } from '@/hooks/useData'
import { RepoProps } from '@/types/Repos'
import { SearchInfo } from '@/components/SearchInfo'

export default function Home() {
  const { user, setUser, data, loading, hasSearched } = useData()
  const showSearchInfo = (!loading && Array.isArray(data)) || user === ''
  const showSearchEmpty = !loading && hasSearched

  return (
    <main className="flex flex-col items-center justify-between">
      <Header setUser={setUser} />

      {showSearchEmpty && (
        <SearchInfo
          termSearch={`"${user}"`}
          title="Nenhum usuário encontrado"
          description="Verifique se a escrita está correta ou tente novamente"
          imageSrc="/assets/img_02.png"
        />
      )}

      {showSearchInfo && (
        <SearchInfo
          title="Procure pelo Nome ou Nome de Usuário"
          description="Encontre os repositórios de algum usuário digitando no campo acima"
          imageSrc="/assets/img_01.png"
        />
      )}

      {loading ? (
        <Loading />
      ) : (
        Array.isArray(data) === false &&
        data !== null && (
          <div className="flex w-full my-6 px-6 flex-col justify-between md:flex-row">
            <Profile profile={(data as RepoProps).profile} />
            <Repos repos={(data as RepoProps).repos} title="Respositórios" />
          </div>
        )
      )}
    </main>
  )
}
