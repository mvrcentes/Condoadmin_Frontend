import React from 'react'
import { render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import ModalAdd from './ModalAdd'

describe('ModalAdd component', () => {
  
  test('Renders correctly', () => {
    render(
      <ModalAdd title="Test">

      </ModalAdd>
    )
  })

  test('Title "anadir" shows correctly', () => {
    expect(screen.queryByText(/Añadir/i)).toBeDefined()
  })

  test('Shows input text correctly', () => {
    expect(screen.queryByText(/ABC/i)).toBeDefined()
  })

})
