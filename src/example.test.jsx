import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Prueba base', () => {
  it('renderiza correctamente', () => {
    render(<div>AnimeKai React funcionando ✅</div>);
    expect(screen.getByText('AnimeKai React funcionando ✅')).toBeTruthy();
  });
});