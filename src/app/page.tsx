'use client'

import Header from '@/components/layout/Header'
import Loading from '@/components/common/Loading'
import { Repos } from '@/components/ContentSection/Repos'
import { Profile } from '@/components/ContentSection/Profile'
import SearchUser from '@/components/SearchUser'
import { useData } from '@/hooks/useData'
import { RepoProps } from '@/types/Repos'

export default function Home() {
  const { setUser, data, loading } = useData()
  const showSearchUser = !loading && Array.isArray(data) && data.length === 0

  return (
    <main className="flex flex-col items-center justify-between">
      <Header setUser={setUser} />

      {showSearchUser && <SearchUser />}

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
