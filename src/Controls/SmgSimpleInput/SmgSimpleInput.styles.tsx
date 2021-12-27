import styled from 'styled-components';

export const SmgInput = styled.input<{isShow: boolean}>`
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.ty.tiny14};
  border-radius: 4px;
  outline: none;
  border-width: 0;
  background-color: ${({ theme }) => theme.co.neutral100};
  color: ${({ theme }) => theme.co.grey200};  
  transform: ${({ isShow })=> isShow ? 'scaleX(100%)' : 'scaleX(0)'};
  transform-origin: right;
  transition: transform .44s;
`;
