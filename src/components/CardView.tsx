// componente de visualização em cards

import React from 'react';
import styled from 'styled-components';
import { User } from '../types';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

//recebe uma lista da interface User criada no types.tsx
interface CardViewProps {
  users: User[];
}

//Estilos
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom:60px;
`;

const Card = styled.div`
  padding: 16px;
  background-color: var(--light-4);
  box-shadow: 0 4px 8px #0b1f4d1f;
  border-radius: 1rem;
  transition: all .3s;
  &:hover{
    transform:scale(1.04)
  };
  border-bottom: 3px solid var(--primary-lighter);
  
`;

const TitleCard = styled.h3`
    letter-spacing: -.01em;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1;
    color:var(--dark-2);
    display:flex;
    align-items:center;
    gap:.5rem;
`

const TextCard = styled.p`
  color: var(--primary-medium);
  letter-spacing: -.01em;
  font-weight:500;
  display:flex;
  align-items:center;
  gap:.5rem;

`

export const CardView: React.FC<CardViewProps> = ({ users }) => {
  return (
    <CardGrid>
      {users.map(user => (
        <Card key={user.id}>
          <TitleCard>
            <FaUser/>
            {user.name}
            </TitleCard>
          <TextCard>
            <IoIosMail />
            {user.email}
            </TextCard>
          <TextCard>
            <FaPhoneAlt />
            {user.phone}
            </TextCard>
        </Card>
      ))}
    </CardGrid>
  );
};


