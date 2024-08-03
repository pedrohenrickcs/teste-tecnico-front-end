import { useState, useEffect } from 'react'
import { getRepos } from '@/services/repos'
import { getProfile } from '@/services/profile'

import { ContentRepo } from '@/types/Repos'
import { ContentProfile } from '@/types/Profile'

export const useData = () => {
  const [user, setUser] = useState<string>('')
  const [data, setData] = useState<{
    profile: ContentProfile
    repos: ContentRepo[]
  } | null>(null)

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (user) {
        const fetchData = async () => {
          setLoading(true)
          try {
            const repos = await getRepos(user)
            const profile = await getProfile(user)
            setData({
              repos,
              profile,
            })
          } catch (error) {
            console.error('Erro ao buscar dados:', error)
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
