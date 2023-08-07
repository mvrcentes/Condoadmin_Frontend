import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
// import { describe } from 'vitest'

import { SearchBar } from './SearchBar'

describe('SearchBar component', () => {
  
  test('Renders correctly', () => {
    render(
      <SearchBar />
    )
  })

  test('Button exists', () => {
    const button = screen.queryByText("");
    fireEvent.click(button);
    expect(screen.queryByText(/plus-button/i)).toBeDefined();
  })

})
