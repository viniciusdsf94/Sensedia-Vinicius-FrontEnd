import React, { useState, useEffect, lazy, Suspense } from 'react';
import { fetchUsers } from '../api';
import { CardView } from '../components/CardView';
import { TableView } from '../components/TableView';
import { SearchBar } from '../components/SearchBar';
import { ToggleView } from '../components/ToggleView';
import { HeaderView } from '../components/HeaderView';
import Banner from '../assets/imagem-banner.svg'

// const CardView = lazy(() => import('../components/CardView'));
// const TableView = lazy(() => import('../components/TableView'));

import { User } from '../types';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    max-width:1250px;
    margin:0 auto;
    padding-top:60px;
    @media(max-width:1300px){
      max-width:100%;
      padding:60px 40px 0;
    }
`
const Title = styled.h1`
    font-size:1.20rem;
    letter-spacing: -.01em;
    color:var(--dark-2);
    font-weight:400;
    
    
`

const SearchDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:60px;
    gap:20px;
    @media(max-width:700px){
      flex-direction:column;
      align-items:flex-start;
      gap:30px;
      margin-bottom:30px;
    }
   

` 

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState<'card' | 'table'>('card');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch(() => {
      setLoading(true);
    })
   
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <HeaderView title="Plataforma para acompanhar seus clientes" subTitle='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using' imageUrl={Banner}></HeaderView>
        <Container>
            
            <Title>Pesquise pelo nome</Title>
            {loading ? (
              <p>Carregando usuários...</p>
            ) : (
            // Suspense envolve as visualizações em Card e Tabela
              <Suspense fallback={<p>Carregando visualizações...</p>}>
                <SearchDiv>
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                  <ToggleView view={view} toggleView={() => setView(view === 'card' ? 'table' : 'card')} />
                </SearchDiv>
              </Suspense>
             )}    
            
            {view === 'card' ? <CardView users={filteredUsers} /> : <TableView users={filteredUsers} />}
      </Container>
    </div>
  );
};
