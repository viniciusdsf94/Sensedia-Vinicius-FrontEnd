import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  *{
    box-sizing: border-box;
  }

  :root{
   --dark-2: #303030;
    --primary: #4a2564;
    --primary-darker: #2b163b;
    --primary-medium: #8241b0;
    --light-4: white;
    --primary-lighter: #ac54eb;
    --primary-subtle: #f3defe;
    --primary-subtle-2: #fdfaff;
    --secondary: #ea5b0c;
    --secondary-darker: #b53b08;
    --secondary-lighter: #ff7d4a;
    --secondary-subtle: #febeaa;
    --tertiary: #0c77fa;
    --tertiary-darker: #0066b7;
    --tertiary-lighter: #0e94ff;
    --tertiary-subtle: #97d1ff;
    --dark-1: black;
    --light-3: #fcfcfc;
    --dark-4: #9f9f9f;
    --light-1: #eee;
    --light-2: #f9f9f9;
    --dark-3: #4c4c4c;
    --blue: #2330f1;
  }


  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--primary-subtle-2);
  }


    
`;
