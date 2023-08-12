import React from 'react'
import { render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import { Card } from './Card'

describe('Card component', () => {
  
  test('Renders correctly', () => {
    render(
      <Card>
        <div>ABC</div>
      </Card>
    )
  })

  test('Title shows correctly', () => {
    expect(screen.queryByText(/Test/i)).toBeDefined()
  })

  test('Shows text correctly', () => {
    expect(screen.queryByText(/ABC/i)).toBeDefined()
  })

})
