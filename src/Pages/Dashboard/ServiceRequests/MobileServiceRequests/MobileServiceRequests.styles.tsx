import styled from 'styled-components'

export const Container = styled.div`
    grid-area: service;
`

export const Header = styled.div`
    font-size: 24px;
    height: 10%;
    color: ${({ theme }) => theme.co.grey500};
    font-weight: 700;
`

export const Content = styled.div`
    border: 4px solid transparent;
    background-color: ${({ theme }) => theme.co.white};
    padding: 40px 15px 25px 20px;
    border-radius: 3px;
    height: 90%;
`
export const TableWrapper = styled.div`
    border-radius: 3px;
    height: 85%;
    overflow: hidden;
    &:hover {
        overflow-y: scroll;
        &::-webkit-scrollbar {
            width: 5px !important;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.co.neutral400};
            border-radius: 5px;
        }
    }
`
export const Item = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.co.neutral300};
    padding: 20px 0;
    width: 100%;
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.co.grey500};
    :hover {
        background-color: ${({ theme }) => theme.co.grey700};
    }
    :last-child {
        border: none;
    }
`
export const FirstRow = styled.div`
    font-size: 16px;
    font-weight: 700;
`
export const SecondRow = styled.div``

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
`
