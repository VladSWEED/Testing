import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header<{isLinks?: boolean}>`
  ${({ theme }) => css`
    z-index: ${({ theme }) => theme.zi.z10};
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to bottom, ${theme.co.grey300} 10%, ${theme.co.grey200} 100%);
    display: grid;
    grid-template-columns: 1fr 3.7fr 1.6fr 3fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
      "logo links input buttons";
    grid-gap: 0; 
    position: relative;
  `}  

  > .logo {
    grid-area: logo;    
    cursor: pointer;
    flex-shrink: 0;    
    margin: auto;    
    margin-left: 10px;  
  }

  @media(max-width: 1665px) {
    grid-template-columns: .7fr 3.5fr 1.5fr 1fr;
  }
  @media(max-width: 1265px) {
    grid-template-columns: ${({ isLinks }) => !isLinks ? '.7fr 3.5fr 1.5fr 1fr' : '.9fr .1fr 3.8fr 1fr'};
  }
`;
