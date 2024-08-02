'use client'

// import SearchUser from '@/components/SearchUser'
import Header from '@/components/layout/Header'
import Loading from '@/components/common/Loading'
import { Repos } from '@/components/ContentSection/Repos'
import { Profile } from '@/components/ContentSection/Profile'
import { useRepos } from '@/hooks/useRepos'
import SearchUser from '@/components/SearchUser'

export default function Home() {
  const { setUser, data, loading } = useRepos()

  return (
    <main className="flex flex-col items-center justify-between">
      <Header setUser={setUser} />

      {data.length === 0 && <SearchUser />}

      {loading ? (
        <Loading />
      ) : (
        <div className="flex w-full my-6 px-6 flex-col md:flex-row">
          <Profile />
          <Repos data={data} />
        </div>
      )}
    </main>
  )
}
