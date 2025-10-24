import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartModal from './CartModal';
import { CartProvider } from '../context/CartContext';

describe('CartModal', () => {
  const mockOnClose = jasmine.createSpy('onClose');

  it('no se renderiza cuando isOpen es false', () => {
    const { container } = render(
      <CartProvider>
        <CartModal isOpen={false} onClose={mockOnClose} />
      </CartProvider>
    );
    expect(container.firstChild).toBeNull();
  });

  it('muestra el mensaje de carrito vacío cuando no hay items', () => {
    const { container } = render(
      <CartProvider>
        <CartModal isOpen={true} onClose={mockOnClose} />
      </CartProvider>
    );
    const message = container.querySelector('p');
    expect(message.textContent).toBe('Tu carrito está vacío');
  });

  it('cierra el modal al hacer clic en el botón de cerrar', () => {
    render(
      <CartProvider>
        <CartModal isOpen={true} onClose={mockOnClose} />
      </CartProvider>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar carrito/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});