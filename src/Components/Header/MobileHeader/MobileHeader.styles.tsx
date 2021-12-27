import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
  z-index: ${({ theme })=> theme.zi.z9};
  background: rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const MobileHeaderContainer = styled.nav`
  ${({ theme }) => css`
      {
        width: 100%;
        height: 120px;
        padding: 0 20px;
        background-image: linear-gradient(to bottom, ${theme.co.grey300} 10%, ${theme.co.grey200} 100%);
      }
    `}  
`;

export const SearchContainer = styled.div<{isInputOpen?: boolean}>`
    width: 100%;
    height: 60px; 
    
    display: ${({ isInputOpen })=> isInputOpen ? 'block' : 'grid'};
    grid-template-columns: ${({ isInputOpen })=> !isInputOpen && '.4fr 4fr 1fr'};
    grid-template-areas: ${({ isInputOpen })=> !isInputOpen && '"nav input buttons"'};
`;

export const Navigate = styled.div`
    grid-area: nav;  
    height: 100%;
    display: flex;
    align-items: center;   

    @media(max-width: 410px) {
      > .mobile-logo {
        display: none;
      }
    }
`;

export const Buttons = styled.div`
    grid-area: buttons;
    height: 100%;
    display: flex;
    align-items: center;

    > div { 
      margin-right: 15px;
    }

    > .exit-button > svg {
      margin-right: 0;
    }

    @media(max-width: 600px) {
      > .exit-button {
        margin-right: 0;
      }
    }
`;

export const NavigationInfo = styled.div`
    width: 100%;
    height: 60px; 
    display: flex;
    align-items: center;
    padding-left: 20px;

    font-size: ${({ theme }) => theme.ty.large};
    font-weight: ${({ theme }) => theme.ty.regular};
    color: ${({ theme }) => theme.co.white};
`;
