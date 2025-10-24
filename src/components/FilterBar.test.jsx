import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
  const mockSetFilter = jasmine.createSpy('setFilter');

  it('renderiza todos los botones de filtro', () => {
    render(<FilterBar filter="all" setFilter={mockSetFilter} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(5); // Todos, Figuras, Mangas, Ropa, Accesorios
  });

  it('marca el filtro activo con la clase correcta', () => {
    const { container } = render(<FilterBar filter="mangas" setFilter={mockSetFilter} />);
    const activeButton = container.querySelector('.active');
    expect(activeButton.textContent).toBe('Mangas');
  });

  it('llama a setFilter con el valor correcto al hacer clic', () => {
    render(<FilterBar filter="all" setFilter={mockSetFilter} />);
    const buttons = screen.getAllByRole('button');
    const ropaButton = buttons.find(button => button.textContent === 'Ropa');
    fireEvent.click(ropaButton);
    expect(mockSetFilter).toHaveBeenCalledWith('ropa');
  });
});