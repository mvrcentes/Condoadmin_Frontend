import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PlusButton } from './PlusButton';

test('Renderiza el botón correctamente', () => {
  render(<PlusButton onClick={() => {}} />);
  
  // Verifica que el botón se haya renderizado
  const buttonElement = screen.getByAltText('add item');
  expect(buttonElement).toBeInTheDocument();
});

test('Llama a la función onClick cuando se hace clic en el botón', () => {
  // Crea una función simulada para onClick
  const onClickMock = () => {
    onClickMock.called = true;
  };
  onClickMock.called = false;

  render(<PlusButton onClick={onClickMock} />);
  
  // Simula un clic en el botón
  const buttonElement = screen.getByAltText('add item');
  fireEvent.click(buttonElement);

  // Verifica que la función onClick se haya llamado
  expect(onClickMock.called).toBe(true);
});
