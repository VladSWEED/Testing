import styled from 'styled-components'

export const Container = styled.div`
    grid-area: tracking;
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
    transition: 0.3s;
    &:hover {
        border-color: ${({ theme }) => theme.co.blue100};
    }
`
export const WorkingHours = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.co.grey600};
`
export const Donut = styled.div`
    --v: calc(((18 / 5) * 60 - 90) * 1deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 155px;
    height: 155px;
    border-radius: 50%;
    padding: 12px;
    background: linear-gradient(white, white) content-box,
        linear-gradient(var(--v), ${({ theme }) => theme.co.neutral300} 50%, transparent 0) 0 /
            min(100%, (50 - 60) * 100%),
        linear-gradient(var(--v), transparent 50%, ${({ theme }) => theme.co.grey600} 0) 0 /
            min(100%, (60 - 50) * 100%),
        linear-gradient(
            to right,
            ${({ theme }) => theme.co.neutral300} 50%,
            ${({ theme }) => theme.co.grey600} 0
        );
`
export const TopNumber = styled.div`
    position: relative;
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.co.grey600};
    margin-bottom: -8px;
    z-index: 10;

    > span {
        font-size: 28px;
    }
`
export const BottomNumber = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.co.neutral500};
`
export const Month = styled.div`
    margin-top: 35px;
`
