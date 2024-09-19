//component de visualização da tabela

import React from 'react';
import styled from 'styled-components';
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import { User } from '../types';

//recebe uma lista da interface User criada no types.tsx
interface TableViewProps {
  users: User[];
}

//Estilos
const TableAria = styled(Table)`
  margin-bottom:60px;
  width:100%;
  // padding: 0.286rem;
  border: 1px solid var(--light-1);
  border-radius: 6px;
  background: var(--light-4);
  outline: none;
  border-spacing: 0;
  min-height: 100px;
  align-self: start;
  max-width: 100%;
  word-break: break-word;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--primary-subtle-2);
    outline-offset: -1px;
`
const TableHeaderAria = styled(TableHeader)`
    color: var(--primary);
    border-bottom: 1px solid var(--light-1);
    

  
`

const TableBodyAria = styled(TableBody)`
      
    border-radius: var(--radius);
    clip-path: inset(0 round var(--radius)); /* firefox */
    outline: none;
    cursor: default;
    color: var(--primary-darker);
    font-size: 1.072rem;
    position: relative;
    transform: scale(1);

    &[data-focus-visible] {
      outline: 2px solid var(--light-4);
      outline-offset: -2px;
    }

    &[data-pressed] {
      background: var(--light-3);
    }

    &[data-selected] {
      background: var(--primary);
      color: var(--light-4);
      --focus-ring-color: var(--light-4);

      &[data-focus-visible],
      .react-aria-Cell[data-focus-visible] {
        outline-offset: -4px;
      }
    }

    &[data-disabled] {
      color: var(--light-2);
    }
`
const RowAria = styled(Row)`
  border-radius:0;
  &:nth-child(odd) {
    background-color: var(--primary-subtle);
  }
`

const CellAria = styled(Cell)`
    
    padding: 15px 8px;
    text-align: left;
    outline: none;
    font-size:1rem;
    
    @media(max-width:860px){
      font-size:.85rem;
    }
    
    @media(max-width:680px){
      font-size:.8rem;
    }
    
    @media(max-width:600px){
      font-size:.75rem;
    }

    &[data-focus-visible] {
      outline: 2px solid var(--light-3);
      outline-offset: -2px;
    }
  }

 
`
const CellColumn = styled(Column)`
    --radius-top: 6px;
    --radius-bottom: 6px;
    --radius: var(--radius-top) var(--radius-top) var(--radius-bottom) var(--radius-bottom);
    padding: 15px 8px;
    text-align: left;
    outline: none;
    border-bottom:1px solid var(--light-1);
    @media(max-width:860px){
      font-size:.9rem;
    }
    
    @media(max-width:680px){
      font-size:.85rem;
    }
    
    @media(max-width:600px){
      font-size:.8rem;
    }

    &[data-focus-visible] {
      outline: 2px solid var(--light-3);
      outline-offset: -2px;
    }
  }

  
`

export const TableView: React.FC<TableViewProps> = ({ users }) => {
  return (
   
    <TableAria aria-label="Files" selectionMode="multiple">
      <TableHeaderAria>
        
        <CellColumn isRowHeader>Nome</CellColumn>
        <CellColumn>Email</CellColumn>
        <CellColumn>Telefone</CellColumn>
      </TableHeaderAria>
      <TableBodyAria>
        {users.map(user => (
              <RowAria key={user.id}>
                <CellAria>{user.name}</CellAria>
                <CellAria>{user.email}</CellAria>
                <CellAria>{user.phone}</CellAria>
              </RowAria>
            ))}
        
      
      </TableBodyAria>
    </TableAria>
  );
};




