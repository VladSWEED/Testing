import styled from 'styled-components';

export const InputWrapper = styled.div<{isOpen?: boolean}>`
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
