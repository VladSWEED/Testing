import styled from 'styled-components'

export const Container = styled.div`
    grid-area: requests;
`
export const TooltipText = styled.div`
    visibility: hidden;
    display: inline-block;
    height: 60px;
    background-color: ${({ theme }) => theme.co.grey800};
    color: ${({ theme }) => theme.co.white};
    font-size: 14px;
    font-weight: 400;
    top: -75px;
    left: -152px;
    text-align: center;
    border-radius: 6px;
    padding: 8px 16px;
    position: absolute;
    width: 320px;
    z-index: 1;
    opacity: 0;
    transition: all 0.5s ease-out;
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 7px;
        border-style: solid;
        border-color: ${({ theme }) => theme.co.grey800} transparent transparent transparent;
    }
`
export const Tooltip = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    margin: 8px 0 0 10px;
    justify-content: center;
    &:hover {
        ${TooltipText} {
            visibility: visible;
            opacity: 1;
        }
    }
    > svg {
        &:hover path {
            fill: ${({ theme }) => theme.co.green200};
        }
        &:hover circle {
            stroke: ${({ theme }) => theme.co.green200};
        }
    }
`
export const Header = styled.div`
    display: flex;
    height: 13%;
    font-size: 24px;
    color: ${({ theme }) => theme.co.grey500};
    font-weight: 700;  
    position: relative;
}
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
    transition: 0.3s;
    &:hover {
        border-color: ${({ theme }) => theme.co.blue100};
    }
`

export const Remains = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Vacation = styled.div`
    display: flex;
    width: 100%;
    height: 115px;
    border-bottom: 1px solid ${({ theme }) => theme.co.neutral300};
    justify-content: space-between;
    align-items: center;
`
export const Name = styled.div`
    font-size: 18px;
    font-weight: 700;
`
export const Time = styled.div`
    margin-top: 8px;
    color: ${({ theme }) => theme.co.green200};
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    font-size: 18px;
    font-weight: 700;
`
export const Illness = styled(Vacation)``
