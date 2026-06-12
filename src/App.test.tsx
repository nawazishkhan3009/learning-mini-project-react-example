import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('App component', () => {
  it('renders heading text', () => {
    render(<App />)

    expect(screen.getByText('Get started!!')).toBeInTheDocument()
  })

  it('renders initial counter value', () => {
    render(<App />)

    expect(screen.getByText(/Count is 0/i)).toBeInTheDocument()
  })

  it('increments counter when button is clicked', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /Count is/i })

    fireEvent.click(button)
    fireEvent.click(button)

    expect(screen.getByText('Count is 2')).toBeInTheDocument()
  })

  it('renders documentation section', () => {
    render(<App />)

    expect(screen.getByText('Documentation')).toBeInTheDocument()
    expect(screen.getByText('Explore Vite')).toBeInTheDocument()
  })
})