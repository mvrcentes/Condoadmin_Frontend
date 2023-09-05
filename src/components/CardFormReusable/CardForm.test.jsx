import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CardForm from './CardForm'

describe('CardForm component', () => {
  // Datos de ejemplo para las pruebas
  const testData = {
    titulo: 'Test Title',
    arrayDatosInput: [
      { title: 'Input 1', type: 'text', name: 'input1', placeholder: 'Placeholder 1' },
      { title: 'Input 2', type: 'text', name: 'input2', placeholder: 'Placeholder 2' },
    ],
  }

  test('Renders correctly', () => {
    render(<CardForm titulo={testData.titulo} arrayDatosInput={testData.arrayDatosInput} />)
    
    // Verifica que el componente se renderice correctamente.
    const cardFormElement = screen.getByTestId('card-form')
    expect(cardFormElement).toBeInTheDocument()

    // Verifica que el título se muestre correctamente.
    expect(screen.getByText(testData.titulo)).toBeInTheDocument()

    // Verifica que los elementos de entrada se muestren correctamente.
    for (const input of testData.arrayDatosInput) {
      expect(screen.getByText(input.title)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(input.placeholder)).toBeInTheDocument()
    }
  })

  test('Title shows correctly', () => {
    render(<CardForm titulo={testData.titulo} arrayDatosInput={testData.arrayDatosInput} />)
    
    // Verifica que el título se muestre correctamente.
    expect(screen.getByText(testData.titulo)).toBeInTheDocument()
  })

  test('Shows text correctly', () => {
    render(<CardForm titulo={testData.titulo} arrayDatosInput={testData.arrayDatosInput} />)
    
    // Verifica que los elementos de entrada se muestren correctamente.
    for (const input of testData.arrayDatosInput) {
      expect(screen.getByText(input.title)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(input.placeholder)).toBeInTheDocument()
    }
  })

  test('Input onChange event', () => {
    render(<CardForm titulo={testData.titulo} arrayDatosInput={testData.arrayDatosInput} />)
    
    // Simula un evento de cambio en el primer input.
    const input1 = screen.getByPlaceholderText('Placeholder 1')
    fireEvent.change(input1, { target: { value: 'New Value' } })

    // Verifica que el valor del input cambió correctamente.
    expect(input1).toHaveValue('New Value')
  })

  test('Renders additional inputs', () => {
    const additionalInputs = [
      { title: 'Input 3', type: 'text', name: 'input3', placeholder: 'Placeholder 3' },
      { title: 'Input 4', type: 'text', name: 'input4', placeholder: 'Placeholder 4' },
    ]

    render(<CardForm titulo={testData.titulo} arrayDatosInput={additionalInputs} />)
    
    // Verifica que los elementos de entrada adicionales se muestren correctamente.
    for (const input of additionalInputs) {
      expect(screen.getByText(input.title)).toBeInTheDocument()
      expect(screen.getByPlaceholderText(input.placeholder)).toBeInTheDocument()
    }
  })
})
