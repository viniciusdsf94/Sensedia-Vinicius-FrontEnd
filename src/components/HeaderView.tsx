// componente do header da página

import styled from 'styled-components';

// recebe o titulo, subtitulo e a url da imagem de onde ele é chamado.
interface HeaderProps {
    title: string;
    subTitle: string;
    imageUrl : string;
  }

// Estilos  
  const Container = styled.div`
     width:100%;
     height:100%;
     max-width:1250px;
     margin:0 auto;
     display:flex;
     align-items:center;
     justify-content:space-between;
     @media(max-width:1350px){
        // max-width:1150px;
        max-width:100%;
        padding:0 30px;
     }
    
       
        
`

  const HeaderContainer = styled.div`
        background-color:var(--primary);
        height:392px;
        @media(max-width:1160px){
        height:362px;
        }
        @media(max-width:960px){
        height:305px;
        }
        @media(max-width:800px){
        height:281.71px;
        }
        @media(max-width:768px){
        height:266px;
        } 
  `
  const HeaderTitle = styled.h1`
        color:white;
        font-size:3rem;
        width:100%;
        max-width:700px;
        @media(max-width:1160px){
            max-width:600px;
            font-size:2.5rem;
        }
        @media(max-width:1000px){
            max-width:550px;
            font-size:2.33rem;
        }
        @media(max-width:900px){
            max-width:450px;
            font-size:2rem;
        }
        @media(max-width:830px){
            max-width:450px;
            font-size:1.9rem;
        }    
        @media(max-width:490px){
            max-width:100%;
            font-size:6vw;
        }          
  `
  const HeaderSubTitle = styled.h4`
        color:white;
        width:100%;
        max-width:600px;
        font-weight:100;
        @media(max-width:1160px){
            max-width:530px;
            font-size:.9rem;
        }
        @media(max-width:900px){
            max-width:450px;
            font-size:.85rem;
        }
        @media(max-width:820px){
            max-width:430px;
            font-size:.85rem;
        }
        @media(max-width:490px){
            max-width:100%;
            
        }            
  `
  const ImageBanner = styled.img`
    position:absolute;
    top:0;
    right:0;
    @media(max-width:1160px){
        width:450px;
     }
    @media(max-width:960px){
        width:380px;
     }
    @media(max-width:800px){
        width:350px;
    }    
    @media(max-width:768px){
        width:330px;
     } 
    @media(max-width:750px){
        display:none;
     }            

  `
   const FirstContent = styled.div`
    @media(max-width:750px){
        margin:0 auto;
        text-align:center;
    }
   `
  
  export const HeaderView: React.FC<HeaderProps> = ({ title, imageUrl, subTitle }) => {
    return (
        <HeaderContainer>
            <Container>
                <FirstContent>
                    <HeaderTitle>
                        {title}
                    </HeaderTitle>
                    <HeaderSubTitle>
                        {subTitle}
                    </HeaderSubTitle>
                </FirstContent>
                <ImageBanner src={imageUrl} alt="Imagem do banner" />
                
            </Container>
        </HeaderContainer>
    );
  };
  