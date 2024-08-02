import { useState, useEffect } from 'react'
import { getRepos } from '../services/repos'
import { ContentRepo } from '@/types/Repos'

export const useRepos = () => {
  const [user, setUser] = useState<string>('')
  const [data, setData] = useState<ContentRepo[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (user) {
        const fetchData = async () => {
          setLoading(true)
          try {
            const repos = await getRepos(user)
            setData(repos)
          } catch (error) {
            console.error('Erro ao buscar repositórios:', error)
          } finally {
            setLoading(false)
          }
        }
        fetchData()
      }
    }, 500)
    return () => clearTimeout(delayDebounceFn)
  }, [user])

  return { user, setUser, data, loading }
}
