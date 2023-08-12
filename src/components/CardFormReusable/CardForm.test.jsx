import React from 'react'
import { render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import CardForm from './CardForm'

describe('CardForm component', () => {
  
  test('Renders correctly', () => {
    render(
      <CardForm arrayDatosInput={["ABC", "TEST"]} />
    )
  })

  test('Title shows correctly', () => {
    expect(screen.queryByText(/Test/i)).toBeDefined()
  })

  test('Shows text correctly', () => {
    expect(screen.queryByText(/ABC/i)).toBeDefined()
  })

})
