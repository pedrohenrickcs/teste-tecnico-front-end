import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Loading } from '..'

describe('Loading component', () => {
  it('renders the loading spinner and text', () => {
    render(<Loading />)

    const svgElement = screen.getByRole('status')
    expect(svgElement).toBeInTheDocument()

    const loadingText = screen.getByText(/Loading.../i)
    expect(loadingText).toBeInTheDocument()
  })
})
