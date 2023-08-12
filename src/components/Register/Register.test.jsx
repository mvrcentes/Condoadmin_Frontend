import React from 'react'
import { render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import { Register } from './Register'

describe('Register component', () => {

  test('Renders correctly', () => {
    render(
      <Register props={{
        Title: "Title",
        User: "User",
        Date: "Date",
        Upvotes: "Upvotes",
      }} />
    )
  })

  test('Title shows correctly', () => {
    expect(screen.queryByText(/Test/i)).toBeDefined()
  })

  test('Shows text correctly', () => {
    expect(screen.queryByText(/ABC/i)).toBeDefined()
  })

})
