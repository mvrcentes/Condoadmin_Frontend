import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalAddHouse from './ModalAdd';

test('Muestra el contenido del modal cuando está abierto', () => {
  const modal = true;

  render(
    <ModalAddHouse modal={modal} handleClose={() => {}} onClick={() => {}}>
      <div data-testid="modal-content">Contenido del Modal</div>
    </ModalAddHouse>
  );

  const modalContent = screen.getByTestId('modal-content');
  expect(modalContent).toBeInTheDocument();
});

test('No muestra el contenido del modal cuando está cerrado', () => {
  const modal = false;

  render(
    <ModalAddHouse modal={modal} handleClose={() => {}} onClick={() => {}}>
      <div data-testid="modal-content">Contenido del Modal</div>
    </ModalAddHouse>
  );

  const modalContent = screen.queryByTestId('modal-content');
  expect(modalContent).toBeNull();
});

test('El botón "AÑADIR" funciona correctamente', () => {
  const modal = true;
  let addButtonClicked = false;

  render(
    <ModalAddHouse
      modal={modal}
      handleClose={() => {}}
      onClick={() => {
        addButtonClicked = true;
      }}
    >
      <div data-testid="modal-content">Contenido del Modal</div>
    </ModalAddHouse>
  );

  const addButton = screen.getByText('AÑADIR');
  fireEvent.click(addButton);

  expect(addButtonClicked).toBe(true);
});

test('Hacer clic en el overlay cierra el modal', () => {
  const modal = true;
  let modalClosed = false;

  render(
    <ModalAddHouse
      modal={modal}
      handleClose={() => {
        modalClosed = true;
      }}
      onClick={() => {}}
    >
      <div data-testid="modal-content">Contenido del Modal</div>
    </ModalAddHouse>
  );

  const overlay = screen.getByTestId('overlay');
  fireEvent.click(overlay);

  expect(modalClosed).toBe(true);
});

test('El botón "AÑADIR" no funciona cuando el modal está cerrado', () => {
  const modal = false;
  let addButtonClicked = false;

  render(
    <ModalAddHouse
      modal={modal}
      handleClose={() => {}}
      onClick={() => {
        addButtonClicked = true;
      }}
    >
      <div data-testid="modal-content">Contenido del Modal</div>
    </ModalAddHouse>
  );

  const addButton = screen.queryByText('AÑADIR');
  expect(addButton).toBeNull();
});
