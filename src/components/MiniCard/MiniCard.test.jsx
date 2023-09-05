import React from 'react'
import { render, screen } from '@testing-library/react'
import MiniCard from './MiniCard'

describe('MiniCard component', () => {
  test('Renders correctly', () => {
    render(<MiniCard title="Test Title">Test Content</MiniCard>)
    
    // Verifica que el componente se renderice correctamente.
    const miniCardElement = screen.getByTestId('mini-card')
    expect(miniCardElement).toBeInTheDocument()

    // Verifica que el título se muestre correctamente.
    expect(screen.getByText('Test Title')).toBeInTheDocument()

    // Verifica que el contenido se muestre correctamente.
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('Title shows correctly', () => {
    render(<MiniCard title="Test Title">Test Content</MiniCard>)
    
    // Verifica que el título se muestre correctamente.
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  test('Content shows correctly', () => {
    render(<MiniCard title="Test Title">Test Content</MiniCard>)
    
    // Verifica que el contenido se muestre correctamente.
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
