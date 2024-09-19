// Componente do campo de busca

import React from 'react';
import {TextField, Label, Input} from 'react-aria-components';
import styled from 'styled-components';

// Estilos

const FieldText = styled(TextField)`
  width:100%;
`
const ChangeButton = styled(Input)`
    width:300px;
    border-radius:.5rem;
    height:50px;
    border: 1px solid var(--primary);
    outline:none;
    padding-left:.7rem;


    &[data-focused] {
      outline: 2px solid var(--primary-lighter);
      outline-offset: -1px;
    };
    &::placeholder{
        font-size:1.1rem;
        
    }
    @media(max-width:700px){
      width:100%;
    }    
`


// interface do input recebe os 2 campos do state que estão no Users.tsx
// a cada iteração no input ele envia o valor digitado para o hook 
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <FieldText>
      <ChangeButton
        value={searchTerm}
        placeholder="Buscar usuário..."
        onChange={e => setSearchTerm(e.target.value)}
      />
    </FieldText>
  );
};
