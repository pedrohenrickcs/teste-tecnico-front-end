import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '@/components/layout/Header'

describe('Header component', () => {
  it('renders the search input, icon, and favorites link', () => {
    const setUser = jest.fn()
    render(<Header setUser={setUser} />)

    const inputElement = screen.getByPlaceholderText('Buscar usuário')
    expect(inputElement).toBeInTheDocument()

    const favoritesLink = screen.getByText('Favoritos')
    expect(favoritesLink).toBeInTheDocument()
  })

  it('calls setUser on input change', () => {
    const setUser = jest.fn()
    render(<Header setUser={setUser} />)

    const inputElement = screen.getByPlaceholderText('Buscar usuário')

    fireEvent.change(inputElement, { target: { value: 'pedrohenrickcs' } })
    expect(setUser).toHaveBeenCalledWith('pedrohenrickcs')
  })
})
