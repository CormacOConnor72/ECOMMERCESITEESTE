import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('HomePage', () => {
  test('renders homepage with hero section', () => {
    renderWithRouter(<HomePage />)

    expect(screen.getByText('Wearable Art')).toBeInTheDocument()
    expect(screen.getByText(/Unique clothing designs crafted by talented artists/)).toBeInTheDocument()
  })

  test('renders featured products section', () => {
    renderWithRouter(<HomePage />)

    expect(screen.getByText('Featured Collection')).toBeInTheDocument()
    expect(screen.getByText('Discover our most popular wearable art pieces')).toBeInTheDocument()
  })

  test('renders feature cards', () => {
    renderWithRouter(<HomePage />)

    expect(screen.getByText('Original Designs')).toBeInTheDocument()
    expect(screen.getByText('Premium Quality')).toBeInTheDocument()
    expect(screen.getByText('Limited Editions')).toBeInTheDocument()
  })

  test('renders call-to-action buttons with correct links', () => {
    renderWithRouter(<HomePage />)

    const shopButton = screen.getByText(/Shop Collection/)
    expect(shopButton).toBeInTheDocument()
    expect(shopButton.closest('a')).toHaveAttribute('href', '/products')

    const artistButton = screen.getByText(/Meet the Artist/)
    expect(artistButton).toBeInTheDocument()
    expect(artistButton.closest('a')).toHaveAttribute('href', '/artist')
  })
})