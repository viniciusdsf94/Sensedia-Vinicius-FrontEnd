//Este arquivo irá testar a funcionalidade de busca do input e se a visualização está correta.
//Para isso eu crio um usuário do tipo User, renderizo a página e verifica se ele aparece na listagem
//O outro teste é para saber se o filtro está funcionando corretamente. Para isso eu procuro o input na tela e aloco em uma variavel, disparo um evento preenchendo o primeiro nome e depois verifico se o usuário aparece na tela.

import { render, screen, fireEvent } from '@testing-library/react';
import { Users } from './Users';
import { describe, expect, test, vi } from 'vitest';
// import '@testing-library/jest-dom';



// Mocka o módulo antes de qualquer código que importe `fetchUsers`
vi.mock('../api', () => ({
  fetchUsers: vi.fn(() => Promise.resolve([{ 
    id: 1, 
    name: 'Vinicius Fernandes', 
    email: 'vinicius_dsf@hotmail.com', 
    phone: '21 999999999' 
  }])),
}));

describe('Página de usuário', () => {
  test('renderizar a lista de usuário', async () => {
    render(<Users />);
    
    // Aguarda o nome do usuário aparecer na tela
    expect(await screen.findByText('Vinicius Fernandes')).toBeInTheDocument();
    expect(screen.getByText('vinicius_dsf@hotmail.com')).toBeInTheDocument();
    expect(screen.getByText('21 999999999')).toBeInTheDocument();
  });

  test('filtro de nome na busca', async () => {
    render(<Users />);
    
    // Encontra a barra de busca
    const searchInput = screen.getByPlaceholderText('Buscar usuário...');
    
    // Simula a mudança de valor no input de busca e escreve Vinícius
    fireEvent.change(searchInput, { target: { value: 'Vinicius' } });
    
    // Verifica se o usuário Vinicius Fernandes apareceu na tela
    expect(await screen.findByText('Vinicius Fernandes')).toBeInTheDocument();
  });
});


