// Component de troca de card para tabela

import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-aria-components';



// Estilos
const ChangeButton = styled(Button)`
    background:none;
    border:none;
    font-size:1.1rem;
    font-weight:500;
    width:200px;
    border-bottom: 2px solid transparent;
    cursor:pointer;
    padding-bottom:.5rem;
    @media(max-width:730px){
    font-size: 1rem;
    width:150px;
    }
    @media(max-width:700px){
      width:50%;
    }
    &:disabled{
       border-bottom:2px solid var(--primary);
    }
    &[data-hovered],&[data-focused] {
        color:var(--primary);
        border:none;
        outline:none;
    }
    &[data-selected] {
    --border-color: var(--highlight-background);
    color: var(--text-color);
  }

  &[data-disabled] {
    color: var(--primary);
    &[data-selected] {
      --border-color: var(--primary);
    }
  }    
`
const Tabs = styled.div`
  display:flex;
  @media(max-width:700px){
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
  }
`

// const ChangeButton = styled(Button)`
//     background:var(--primary);
//     width:250px;
//     border-radius:.5rem;
//     height:50px;
//     color:white;
//     font-size:1.1rem;
//     cursor:pointer;
//     transition: transform .3s;
//     &:hover{
//       transform:scale(1.04)
//     }
//     &:disabled{
//       pointer-events:none;
//       opacity:0.5;
//     }  
//       @media(max-width:550px){
//         width:100%;
//       }
// `

// recebe os possiveis states e a função de set.
interface ToggleViewProps {
  view: 'card' | 'table';
  toggleView: () => void;
}

// ao clicar no botão ele executa a função no user que é um if ternario que faz a troca de card para table na variável view.
export const ToggleView: React.FC<ToggleViewProps> = ({ view, toggleView }) => {
  return (
    <Tabs>
      <ChangeButton isDisabled={view == 'card' ? true : false} onPress={toggleView}>
        Veja em Cards
      </ChangeButton>
      <ChangeButton isDisabled={view == 'table' ? true : false} onPress={toggleView}>
        Veja em Tabela
    </ChangeButton>

      
    </Tabs>
    
  );
};
