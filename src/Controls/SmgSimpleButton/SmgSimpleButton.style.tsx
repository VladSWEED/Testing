import styled from 'styled-components';

export const SmgButton = styled.div<{type: string}>`   
  padding: 10px 20px;
  color: ${({ theme }) => theme.co.white};
  background-color: ${({ theme, type }) => theme.co[type]};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.ty.tiny12};
  font-weight: ${({ theme }) => theme.ty.bold};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  :hover {      
    cursor: pointer;
    outline: 2px solid ${({ theme }) => theme.co.white};
  }

  > svg {
    margin-right: 8px;
  }
`;
