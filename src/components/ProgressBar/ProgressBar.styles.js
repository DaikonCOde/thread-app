import styled from 'styled-components';

export const ContentProgressBar = styled.div.attrs({
    className: 'content-progress-bar'
})`
    max-width: 300px;
    overflow: hidden;
    margin: 0 auto 30px;
    .list {
        transition: ${({ theme }) => theme.transition.default};
        transform: translateX(0);
    }

    .progress-value {
        min-width: 30px;
        height: 30px;
        border-radius: ${({ theme }) => theme.rounded[50]};
        border: 4px solid ${({ theme }) => theme.c_text.ligth};
        background: ${({ theme }) => theme.colors.gray};
        position: relative;
        transition: ${({ theme }) => theme.transition.default};

        &::before {
            content: '';
            position: absolute;
            left: -15px;
            top: calc(50% - 2px);
            width: 10px;
            height: 4px;
            background: ${({ theme }) => theme.c_text.ligth};
        }
        &::after {
            content: '';
            position: absolute;
            right: -15px;
            top: calc(50% - 2px);
            width: 15px;
            height: 4px;
            background: ${({ theme }) => theme.c_text.ligth};
        }

        .value {
            line-height: 22px;
            color: ${({ theme }) => theme.c_text.gray};
        }
    }

    .active {
        border-color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.white};

        &::before {
            background: ${({ theme }) => theme.colors.primary};
        }
        &::after {
            background: ${({ theme }) => theme.colors.primary};
        }

        .value {
            color: ${({ theme }) => theme.c_text.principal};
        }
    }

    .list .progress-value:first-child::before,
    .list .progress-value:last-child::after {
        width: 0;
        height: 0;
    }

    .translate-list {
        transform: translateX(-${({ value }) => value * 47.5}px);
    }
`;
