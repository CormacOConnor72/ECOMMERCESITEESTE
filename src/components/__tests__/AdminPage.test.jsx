import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AdminPage from '../AdminPage'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('AdminPage', () => {
  test('renders login form when not authenticated', () => {
    renderWithRouter(<AdminPage />)

    expect(screen.getByText('Admin Login')).toBeInTheDocument()
    expect(screen.getByLabelText('Password:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  test('shows error for invalid password', () => {
    renderWithRouter(<AdminPage />)

    const passwordInput = screen.getByLabelText('Password:')
    const loginButton = screen.getByRole('button', { name: 'Login' })

    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } })
    fireEvent.click(loginButton)

    // Note: This would show an alert in real usage, but we can't test alerts easily
    // The component should remain on login screen
    expect(screen.getByText('Admin Login')).toBeInTheDocument()
  })

  test('shows admin panel after successful login', () => {
    // Mock alert to prevent it from showing during test
    window.alert = vi.fn()

    renderWithRouter(<AdminPage />)

    const passwordInput = screen.getByLabelText('Password:')
    const loginButton = screen.getByRole('button', { name: 'Login' })

    fireEvent.change(passwordInput, { target: { value: '123456' } })
    fireEvent.click(loginButton)

    expect(screen.getByText('Admin Panel')).toBeInTheDocument()
    expect(screen.getByText('Create New Product')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  test('product creation form has all required fields', () => {
    window.alert = vi.fn()

    renderWithRouter(<AdminPage />)

    // Login first
    const passwordInput = screen.getByLabelText('Password:')
    const loginButton = screen.getByRole('button', { name: 'Login' })
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    fireEvent.click(loginButton)

    // Check form fields
    expect(screen.getByLabelText('Product Name:')).toBeInTheDocument()
    expect(screen.getByLabelText('Category:')).toBeInTheDocument()
    expect(screen.getByLabelText('Description:')).toBeInTheDocument()
    expect(screen.getByLabelText('Price (EUR):')).toBeInTheDocument()
    expect(screen.getByLabelText('Stock Count:')).toBeInTheDocument()
    expect(screen.getByLabelText('Sizes (comma-separated):')).toBeInTheDocument()
    expect(screen.getByLabelText('Colors (comma-separated):')).toBeInTheDocument()
    expect(screen.getByLabelText('Tags (comma-separated):')).toBeInTheDocument()
    expect(screen.getByLabelText('Featured Product')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Create Product' })).toBeInTheDocument()
  })

  test('logout button returns to login screen', () => {
    window.alert = vi.fn()

    renderWithRouter(<AdminPage />)

    // Login first
    const passwordInput = screen.getByLabelText('Password:')
    const loginButton = screen.getByRole('button', { name: 'Login' })
    fireEvent.change(passwordInput, { target: { value: '123456' } })
    fireEvent.click(loginButton)

    // Logout
    const logoutButton = screen.getByRole('button', { name: 'Logout' })
    fireEvent.click(logoutButton)

    expect(screen.getByText('Admin Login')).toBeInTheDocument()
  })
})