import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SearchProps, SearchInfo } from '..'

describe('SearchInfo component', () => {
  const props: SearchProps = {
    termSearch: 'fthfthfthhf',
    title: 'Nenhum usuário encontrado',
    description: 'Verifique se a escrita está correta ou tente novamente',
    imageSrc: 'https://example.com/react.png',
  }

  it('renders the title, description, and image correctly', () => {
    render(<SearchInfo {...props} />)

    if (props.termSearch) {
      expect(screen.getByText(props.termSearch)).toBeInTheDocument()
    }

    expect(screen.getByText(props.title)).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
  })
})
