import { useState, useEffect } from 'react'
import { getRepos } from '@/services/repos'
import { getProfile } from '@/services/profile'

import { ContentRepo } from '@/types/Repos'
import { ContentProfile } from '@/types/Profile'

export const useData = () => {
  const [user, setUser] = useState<string>('')
  const [data, setData] = useState<
    | {
        profile: ContentProfile
        repos: ContentRepo[]
      }
    | null
    | []
  >([])

  const [loading, setLoading] = useState<boolean>(false)
  const [hasSearched, setHasSearched] = useState<boolean>(false)

  console.log('user', user)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (user) {
        const fetchData = async () => {
          setLoading(true)
          setHasSearched(true)
          try {
            const repos = await getRepos(user)
            const profile = await getProfile(user)
            setData({
              repos,
              profile,
            })

            setHasSearched(false)
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

  return { user, setUser, data, loading, hasSearched }
}
