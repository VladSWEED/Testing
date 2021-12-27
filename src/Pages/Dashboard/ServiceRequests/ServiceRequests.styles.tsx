import styled from 'styled-components'

export const Container = styled.div`
    grid-area: service;
`

export const Header = styled.div`
    height: 13%;
    font-size: 24px;
    color: ${({ theme }) => theme.co.grey500};
    font-weight: 700;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Content = styled.div`
    display: flex;
    height: 87%;
    flex-direction: column;
    justify-content: space-around;
    border: 4px solid transparent;
    background-color: ${({ theme }) => theme.co.white};
    padding: 50px 40px 55px;
    border-radius: 3px;
    position: relative;

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
    }
`
export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
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
export const Table = styled.div`
    position: relative;
`
export const TableHeader = styled.div``
export const TableBody = styled.div``

export const FirstColumn = styled.div`
    width: 360px;
`

export const SecondColumn = styled.div`
    width: 100px;
`

export const ThirdColumn = styled.div`
    width: 100px;
`

export const HeaderRow = styled.div`
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 200;
    display: flex;
    width: 590px;
    padding: 0 10px 0 20px;
`

export const BodyRow = styled.div`
    display: flex;
    padding: 25px 10px 0 20px;
    height: 66px;
    width: 590px;
    border-bottom: 1px solid ${({ theme }) => theme.co.neutral300};
    cursor: pointer;
    font-size: 14px;
    color: ${({ theme }) => theme.co.grey500};
    :hover {
        background-color: ${({ theme }) => theme.co.grey700};
    }
    :last-child {
        border: none;
    }

    > div:first-child {
        font-size: 16px;
        font-weight: 700;
    }
`
