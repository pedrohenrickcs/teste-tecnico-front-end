'use client'

import Header from '@/components/layout/Header'
import Loading from '@/components/common/Loading'
import { Repos } from '@/components/ContentSection/Repos'
import { Profile } from '@/components/ContentSection/Profile'
import SearchUser from '@/components/SearchUser'
import { useData } from '@/hooks/useData'

export default function Home() {
  const { setUser, data, loading } = useData()

  return (
    <main className="flex flex-col items-center justify-between">
      <Header setUser={setUser} />

      {!data && <SearchUser />}

      {loading ? (
        <Loading />
      ) : (
        data && (
          <div className="flex w-full my-6 px-6 flex-col justify-between md:flex-row">
            <Profile profile={data?.profile} />
            <Repos repos={data?.repos} />
          </div>
        )
      )}
    </main>
  )
}
