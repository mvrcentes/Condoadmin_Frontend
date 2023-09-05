import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  test('Renderiza correctamente el componente con un valor por defecto', () => {
    render(<SearchBar value="default" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Buscar');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('default');
  });

  test('Renderiza correctamente el componente sin valor', () => {
    render(<SearchBar value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Buscar');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });

  test('Llama a la función onChange al cambiar el valor del input', () => {
    // Creamos una función simulada para onChange
    const onChangeMock = (event) => {
      onChangeMock.called = true;
      onChangeMock.value = event.target.value;
    };
    onChangeMock.called = false;
    onChangeMock.value = '';

    // Renderizamos el componente y pasamos la función simulada como prop onChange
    render(<SearchBar value={onChangeMock.value} onChange={onChangeMock} />);
    
    // Obtenemos el elemento de input
    const inputElement = screen.getByPlaceholderText('Buscar');
    
    // Simulamos un cambio en el valor del input
    fireEvent.change(inputElement, { target: { value: 'nuevo-valor' } });

    // Verificamos que la función onChange se haya llamado
    expect(onChangeMock.called).toBe(true);

    // Verificamos que el valor pasado a la función sea el esperado
    expect(onChangeMock.value).toBe('nuevo-valor');
  });

  test('Renderiza correctamente el icono', () => {
    render(<SearchBar value="" onChange={() => {}} />);
    const iconElement = screen.getByAltText('search icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('Renderiza correctamente con un valor personalizado en el placeholder', () => {
    render(<SearchBar value="" onChange={() => {}} placeholder="Buscar algo" />);
    const inputElement = screen.getByPlaceholderText('Buscar');
    expect(inputElement).toBeInTheDocument();
  });
});
