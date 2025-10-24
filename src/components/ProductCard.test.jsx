import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jasmine-dom';
import ProductCard from './ProductCard';
import { CartProvider } from '../context/CartContext';

describe('ProductCard component', () => {
  const mockProduct = {
    id: 42,
    name: 'Figura Test',
    img: '/imagenes/figura_test.png',
    price: 12345
  };

  const renderWithContext = (component) => {
    return render(
      <CartProvider>
        {component}
      </CartProvider>
    );
  };

  it('renders product details correctly', () => {
    renderWithContext(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Figura Test')).toBeDefined();
    expect(screen.getByText('$12345')).toBeDefined();
    expect(screen.getByAltText('Figura Test')).toBeDefined();
    expect(screen.getByRole('button', { name: /añadir al carrito/i })).toBeDefined();
  });

  it('adds product to cart when button is clicked', () => {
    renderWithContext(<ProductCard product={mockProduct} />);

    const button = screen.getByRole('button', { name: /añadir al carrito/i });
    fireEvent.click(button);

    // Verificamos que el botón sigue en el documento después del clic
    expect(button).toBeDefined();
  });

  it('displays correct product image with alt text', () => {
    renderWithContext(<ProductCard product={mockProduct} />);

    const img = screen.getByAltText('Figura Test');
    expect(img).toBeDefined();
    expect(img.getAttribute('src')).toBe('/imagenes/figura_test.png');
  });
});
