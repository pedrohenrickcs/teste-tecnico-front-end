import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Title from '..'

describe('Title component', () => {
  it('renders the text passed as a prop', () => {
    const text = 'Respositórios'
    render(<Title text={text} />)

    const titleElement = screen.getByText(text)
    expect(titleElement).toBeInTheDocument()
  })
})
