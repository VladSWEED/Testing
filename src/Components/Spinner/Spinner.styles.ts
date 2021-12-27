import styled, { css } from 'styled-components';

export const Container = styled.div<{ $primary: boolean }>`
  ${({ $primary }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${$primary &&
    css`
      & > .lds-ring div {
        border: 8px solid ${({ theme }) => theme.co.green200};
        border-color: ${({ theme }) => theme.co.grey500} transparent transparent transparent;
      }
    `}
  `}
`;
