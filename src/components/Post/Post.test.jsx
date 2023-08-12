import React from 'react'
import { render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import { Post } from './Post'

describe('Post component', () => {
  
  test('Renders correctly', () => {
    render(
      <Post />
    )
  })

  test('Title shows correctly', () => {
    expect(screen.queryByText(/Test/i)).toBeDefined()
  })

  test('Shows text correctly', () => {
    expect(screen.queryByText(/ABC/i)).toBeDefined()
  })

})
