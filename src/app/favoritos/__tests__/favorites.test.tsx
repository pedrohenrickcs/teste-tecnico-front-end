import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { FavoritesProvider } from '@/context/FavoritesContext'
import Favorites from '../page'

describe('Favorites Component', () => {
  it('renders the header', () => {
    render(
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>,
    )

    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })

  it('displays the message for no favorites', () => {
    render(
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>,
    )

    const messageElement = screen.getByText(
      'Você ainda não adicionou nenhum repositório aos favoritos.',
    )
    expect(messageElement).toBeInTheDocument()
  })
})
