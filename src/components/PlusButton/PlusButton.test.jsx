import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import { PlusButton } from './PlusButton'

describe('PlusButton component', () => {
  
  test('Renders correctly', () => {
    render(
      <PlusButton />
    )
  })

  test('Button exists', () => {
    const button = screen.queryByText("");
    fireEvent.click(button);
    expect(screen.queryByText(/plus-button/i)).toBeDefined();
  })

})
