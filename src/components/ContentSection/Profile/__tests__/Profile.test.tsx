import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Profile } from '@/components/ContentSection/Profile'
import { ContentProfile } from '@/types/Profile'

describe('Profile component', () => {
  const mockProfile: ContentProfile = {
    avatar_url: 'https://avatars.githubusercontent.com/u/12418429?v=4',
    name: 'Pedro Henrick',
    login: 'pedrohenrickcs',
    html_url: 'https://github.com/pedrohenrickcs',
    bio: 'Bem vindo!',
  }

  it('renders profile information correctly', () => {
    render(<Profile profile={mockProfile} />)

    expect(screen.getByAltText('Pedro Henrick')).toBeInTheDocument()
    expect(screen.getByText('Pedro Henrick')).toBeInTheDocument()
    expect(screen.getByText('pedrohenrickcs')).toBeInTheDocument()
    expect(screen.getByText('Bem vindo!')).toBeInTheDocument()
  })
})
