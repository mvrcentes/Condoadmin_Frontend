import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { MemoryRouter } from 'react-router-dom';

describe('Card component', () => {
  test('Renders correctly without a link', () => {
    render(
      <Card>
        <div>ABC</div>
      </Card>
    );

    const cardElement = screen.getByTestId('card-component');
    expect(cardElement).toBeInTheDocument();

    expect(screen.queryByText(/ABC/i)).toBeDefined();
  });

  test('Renders correctly with a link', () => {
    render(
      <MemoryRouter>
        <Card to="example">
          <div>ABC</div>
        </Card>
      </MemoryRouter>
    );

    const linkElement = screen.getByTestId('card-link');
    expect(linkElement).toBeInTheDocument();

    expect(screen.queryByText(/ABC/i)).toBeDefined();
  });

  test('Contains data code and address', () => {
    const testData = {
      code: '123',
      address: '123 Main St',
    };

    render(
      <Card data={testData}>
        <div>ABC</div>
      </Card>
    );

    expect(screen.getByText((content, element) => {
      return content.startsWith('ABC');
    })).toBeDefined();
    
  });

  test('Does not show title initially', () => {
    render(
      <Card>
        <div>ABC</div>
      </Card>
    );

    expect(screen.queryByText(/Test/i)).toBeNull();
  });

  test('Title shows correctly with specific text', () => {
    render(
      <Card>
        <div>ABC</div>
        <div>Test</div>
      </Card>
    );

    expect(screen.getByText(/Test/i)).toBeDefined();
  });
});
