import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header<{isLinks: boolean}>`
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
    margin-left: 50px;  
  }
  
  @media(max-width: 1665px) {
    grid-template-columns: .7fr 3.5fr 1.5fr 1fr;
    > .logo {
      margin-left: 10px; 
    }
  }
  
  @media(max-width: 1265px) {
    grid-template-columns: ${({ isLinks }) => !isLinks ? '.7fr 3.5fr 1.5fr 1fr' : '.9fr .1fr 3.8fr 1fr'};
  }
`;

export const MainLinksWrapper = styled.div<{isInputOpen: boolean, isEnglish: boolean}>` 
    grid-area: links;
    color: ${({ theme }) => theme.co.neutral300};    
    font-size: ${({ theme, isEnglish }) => isEnglish ? theme.ty.standard : theme.ty.small};
    
    ul {
      list-style: none;  
      display: flex;
      align-items: center;   
      padding-left: ${({ isEnglish }) => isEnglish ? '25px' : '15px'};   
      height: 60px;
      margin: 0;  
    }  
    
    @media(max-width: 1820px) {
      ul {
        padding-left: ${({ isInputOpen }) => isInputOpen ? '10px' : '25px'};
      }      
    }

    @media(max-width: 1225px) {
      ul {
        padding-left: ${({ isEnglish }) => !isEnglish && '5px'};
      }      
    }
    
    @media(max-width: 995px) {
      ul {
        padding-left: 10px;
      }      
    }
`;

export const ListElement = styled.li<{isLink?: boolean, isInputOpen: boolean, isEnglish?: boolean}>`    
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    margin: ${({ isEnglish }) => isEnglish ? '0 15px' : '0 10px'};

  > a:after {
    content: '';
    display: ${({ isLink }) => isLink ? 'block': 'none'};    
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.co.white};
  }

  > a {
    display: flex;
    line-height: 16px;
  }  

  > a > svg {
    margin-right: ${({ isEnglish }) => isEnglish ? '10px' : '7px'};  
  }

  :hover {
    > a {
      color: ${({ theme }) => theme.co.white};

      > svg {
        filter: brightness(150%);        
      }
    }    
  }    

  @media(max-width: 1820px) {
    > a > svg {
      margin-right: ${({ isInputOpen }) => isInputOpen ? '5px' : '10px'};
    }    
    margin: ${({ isInputOpen }) => isInputOpen ? '0 5px' : '0 15px'};         
  }

  @media(max-width: 1245px) {
    > a > svg {
      margin-right: ${({ isEnglish }) => !isEnglish && '5px'};
    }    
    margin: ${({ isEnglish }) => !isEnglish && '0 5px'};         
  }

  @media(max-width: 1150px) {
    > a > svg {
      margin-right: ${({ isInputOpen }) => !isInputOpen && '5px'};
    }    
    margin: ${({ isInputOpen }) => !isInputOpen && '0 5px'};         
  }  
`;

export const InputWrapper = styled.div<{isOpen: boolean}>`
    grid-area: input;
    justify-self: start;
    align-self: center;

    > div {
      width: 300px;
      height: 60px;
      display: flex;
      align-items: center;      
      position: relative;
    }

    > div >.search-icon {
      cursor: pointer;
      top: 23px;
      right: 8px;
      position: absolute;
    }    

    @media(max-width: 1775px) and (min-width: 1666px) {
      margin-right: 15px;
    }

    @media(max-width: 1665px) {
      justify-self: end;
    }
    @media(max-width: 1280px) {
      > div {
        width: ${({ isOpen }) => isOpen ? '300px' : '30px'};
      }      
    }
    @media(max-width: 1265px) {
      &, > div {
        width: ${({ isOpen }) => isOpen ? '100%' : '30px'};
      }      
    }
`;

export const ButtonWrapper = styled.div`
    grid-area: buttons;
    justify-self: start;
    align-self: center;
    display: flex;
    padding-right: 20px;
    width: 100%;

    > div {
      margin-right: 15px;
    }

    > .exit-button {    
      margin-left: 70px;
      
      > svg {
        margin-right: 0;
      }
    }

    @media(max-width: 1870px) {
      > .exit-button {    
        margin-left: 20px;    
      }
    }

    @media(max-width: 1665px) {
      > .exit-button {    
        margin-left: 0;    
        margin-right: 5px;    
      }      
      padding-left: 10px;
    }
`;

export const SubHeader = styled.div<{isOpen: boolean, isEnglish: boolean}>`
    position: absolute;
    z-index: ${({ theme, isOpen }) => isOpen ? theme.zi.z1 : theme.zi.z0};
    width: 100%;
    height: 60px;
    padding-left: ${({ isEnglish }) => isEnglish ? '12.8%' : '12%'};
    color: ${({ theme }) => theme.co.grey500};
    background-color: ${({ theme }) => theme.co.white};
    box-shadow: 0 2px 7px 0 rgba(0,0,0,.2);
    line-height: 60px;
    transform: ${({ isOpen })=> isOpen ? 'translateY(0)' : 'translateY(-60px)'};
    transition: transform .22s;

    a {
      font-size: ${({ theme }) => theme.ty.small};
      margin-right: ${({ isEnglish }) => isEnglish ? '25px' : '15px'};
      cursor: pointer;
    }

    a:hover {
      color: ${({ theme }) => theme.co.green200};
    }

    @media(max-width: 1240px) {
      padding-left: 160px;
    }

    @media(max-width: 1120px) {
      padding-left: ${({ isEnglish }) => !isEnglish && '140px'};
      a {
        margin-right: ${({ isEnglish }) => !isEnglish && '8px'};
      }
    }
    
    @media(max-width: 1020px) {
      padding-left: 150px;
      a {
        margin-right: 15px;
      }
    }
`;
