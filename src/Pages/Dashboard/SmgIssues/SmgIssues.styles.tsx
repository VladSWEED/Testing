import styled from 'styled-components'

export const Container = styled.div`
    grid-area: issues;
`

export const Header = styled.div`
    height: 13%;
    font-size: 24px;
    color: ${({ theme }) => theme.co.grey500};
    font-weight: 700;
`

export const Wrapper = styled.div`
    height: 87%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 4px solid transparent;
    background-color: ${({ theme }) => theme.co.white};
    padding: 45px 46px 55px;
    border-radius: 3px;
    height: 100%;
`

export const Issues = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    justify-content: center;
`
export const Text = styled.div`
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.co.grey600};
    max-width: 280px;
    margin-top: 30px;
`
