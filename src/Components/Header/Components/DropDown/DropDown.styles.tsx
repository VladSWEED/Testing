import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DropDownContainer = styled(motion.div)<{isEnglish: boolean}>`
  width: 480px;
  z-index: ${({ theme })=> theme.zi.z10};
  background: ${({ theme })=> theme.co.grey200};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  color: ${({ theme })=> theme.co.white};
  padding: 20px 30px;

  > div:first-child, > div:last-child {
    width: 100%;
    text-align: right;
    margin-bottom: 25px;
  }
  
  > div:last-child {    
    margin-top: 8px;
  }

  @media(max-width: 485px) {
      width: 320px;
      padding: ${({ isEnglish }) => !isEnglish && '15px 20px'};
  }

  @media(max-height: 590px) {    
    > div:first-child {
      margin-bottom: ${({ isEnglish }) => !isEnglish && '10px'};
    }
  }
`;

export const PersonalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    border-bottom: 1px solid ${({ theme })=> theme.co.grey100};
    margin-top: 5px;

    > div:first-child {
      text-transform: uppercase;
      font-size: ${({ theme })=> theme.ty.tiny12};
      font-weight: ${({ theme })=> theme.ty.regular};
      margin-top: 3px;
    }
`;

export const AdministrativeContainer = styled(PersonalContainer)`   
`;

export const ServiceContainer = styled(PersonalContainer)`
`;

export const SystemContainer = styled(PersonalContainer)`
`;


export const PersonalLinks = styled.div<{isEnglish: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 300px;
  overflow-wrap: anywhere;

  > a {
    margin-bottom: 15px;
    text-align: right;
  } 

  > a:last-child {
    margin-bottom: 10px;
  }

  @media(max-width: 485px) {
    max-width: 155px;
  }

  @media(max-height: 620px) {
    > a {
      margin-bottom: ${({ isEnglish }) => isEnglish ? '15px' : '10px'};
    }
  }  
`;

export const AdministrativeLinks = styled(PersonalLinks)` 
`;

export const ServiceLinks = styled(PersonalLinks)` 
`;

export const SystemLinks = styled(PersonalLinks)` 
`;
