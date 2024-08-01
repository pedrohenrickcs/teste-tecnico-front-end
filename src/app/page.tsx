'use client'

import { Repos } from '@/components/Repos'
import { useState, useEffect } from 'react'
import { getRepos } from '../services/repos'
import { ContentRepo } from '@/types/Repos'
import SearchUser from '@/components/SearchUser'
import Header from '@/components/layout/Header'
import Loading from '@/components/common/Loading'

export default function Home() {
  const [data, setData] = useState<ContentRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRepos('pedrohenrickcs')
        setData(data)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  if (loading) return <Loading />

  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      {/* <SearchUser /> */}
      <Repos data={data} />
    </main>
  )
}
