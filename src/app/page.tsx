'use client'

import { Repositorios } from '@/components/Repos'
import { useState, useEffect } from 'react'
import { getRepos } from './services/repos'
import { ContentRepo } from '@/types/Repos'

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

  if (loading) return <p>Carregando...</p>

  return (
    <main className="flex flex-col items-center justify-between">
      <Repositorios data={data} />
    </main>
  )
}
