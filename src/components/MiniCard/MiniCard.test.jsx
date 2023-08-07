import React from 'react'
import { render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import MiniCard from './MiniCard'

describe('MiniCard component', () => {
  
  test('Renders correctly', () => {
    render(
      <MiniCard title="Test">
        <div>ABC</div>
      </MiniCard>
    )
  })

  test('Title shows correctly', () => {
    expect(screen.queryByText(/Test/i)).toBeDefined()
  })

  test('Shows text correctly', () => {
    expect(screen.queryByText(/ABC/i)).toBeDefined()
  })

})
