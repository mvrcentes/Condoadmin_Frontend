import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import { Register } from './Register';

describe('Register component', () => {
  const defaultProps = {
    titulo: 'Título de prueba',
    residente: 'Usuario de prueba',
    fecha: '2023-09-05',
    upvotes: 10,
  };

  test('Renderiza correctamente el componente con valores por defecto', () => {
    render(<BrowserRouter><Register props={defaultProps} /></BrowserRouter>); // Envuelve con BrowserRouter
    
    // Verifica que los elementos de texto se rendericen
    const titleElement = screen.getByText('Título de prueba');
    const userElement = screen.getByText('Usuario de prueba');
    const dateElement = screen.getByText('2023-09-05');
    const upvotesElement = screen.getByText('10');
    
    expect(titleElement).toBeInTheDocument();
    expect(userElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(upvotesElement).toBeInTheDocument();
  });

  test('Renderiza correctamente el componente sin enlace', () => {
    render(<BrowserRouter><Register props={defaultProps} /></BrowserRouter>); // Envuelve con BrowserRouter
    
    // Verifica que los elementos de texto se rendericen
    const titleElement = screen.getByText('Título de prueba');
    const userElement = screen.getByText('Usuario de prueba');
    const dateElement = screen.getByText('2023-09-05');
    const upvotesElement = screen.getByText('10');
    
    expect(titleElement).toBeInTheDocument();
    expect(userElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(upvotesElement).toBeInTheDocument();
  });

  test('Renderiza correctamente el componente sin enlace y valores personalizados', () => {
    const customProps = {
      titulo: 'Personalizado',
      residente: 'Usuario Personalizado',
      fecha: '2023-09-07',
      upvotes: 30,
    };

    render(<BrowserRouter><Register props={customProps} /></BrowserRouter>); // Envuelve con BrowserRouter
    
    // Verifica que los elementos de texto se rendericen con los valores personalizados
    const titleElement = screen.getByText('Personalizado');
    const userElement = screen.getByText('Usuario Personalizado');
    const dateElement = screen.getByText('2023-09-07');
    const upvotesElement = screen.getByText('30');
    
    expect(titleElement).toBeInTheDocument();
    expect(userElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(upvotesElement).toBeInTheDocument();
  });

  test('Renderiza correctamente el componente con valores por defecto', () => {
    render(<BrowserRouter><Register props={defaultProps} /></BrowserRouter>); // Envuelve con BrowserRouter
    
    // Verifica que los elementos de texto se rendericen
    const titleElement = screen.getByText('Título de prueba');
    const userElement = screen.getByText('Usuario de prueba');
    const dateElement = screen.getByText('2023-09-05');
    const upvotesElement = screen.getByText('10');
    
    expect(titleElement).toBeInTheDocument();
    expect(userElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(upvotesElement).toBeInTheDocument();
  });

});
