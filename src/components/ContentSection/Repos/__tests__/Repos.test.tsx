import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Repos, ReposProps } from '@/components/ContentSection/Repos'
import { useFavorites } from '@/context/FavoritesContext'

jest.mock('@/context/FavoritesContext', () => ({
  useFavorites: jest.fn(),
}))

jest.mock('@/components/icons/icons', () => ({
  __esModule: true,
  default: () => <span>Icon</span>,
}))

describe('Repos component', () => {
  const mockAddFavorite = jest.fn()
  const mockRemoveFavorite = jest.fn()

  const mockFavorites = [
    {
      id: 12418429,
      name: 'arcade-game-party',
      description: 'Arcade Game Party',
      language: 'TypeScript',
      html_url: 'https://github.com/pedrohenrickcs/arcade-game-party',
      pushed_at: new Date().toISOString(),
    },
  ]

  beforeEach(() => {
    ;(useFavorites as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
    })
  })

  it('renders the repos and title', () => {
    const repos: ReposProps['repos'] = [
      {
        id: 12418429,
        name: 'arcade-game-party',
        description: 'Arcade Game Party',
        language: 'TypeScript',
        html_url: 'https://github.com/pedrohenrickcs/arcade-game-party',
        pushed_at: new Date().toISOString(),
      },
    ]
    const title = 'Repositórios'

    render(<Repos repos={repos} title={title} />)

    expect(screen.getByText(title)).toBeInTheDocument()

    expect(screen.getByText('arcade-game-party')).toBeInTheDocument()
    expect(screen.getByText('Arcade Game Party')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })
})
