'use client'

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react'
import { ContentRepo } from '@/types/Repos'

interface FavoritesContextType {
  favorites: ContentRepo[]
  addFavorite: (repo: ContentRepo) => void
  removeFavorite: (repoId: number) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
)

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<ContentRepo[]>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const addFavorite = (repo: ContentRepo) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, repo]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return updatedFavorites
    })
  }

  const removeFavorite = (repoId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (repo) => repo.id !== repoId,
      )
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      return updatedFavorites
    })
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
