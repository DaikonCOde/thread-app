import styled, { keyframes } from 'styled-components';

const showPrevQuestionButton = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 100%
    }
`;

export const ContentHome = styled.div.attrs({
    className: 'content-home'
})`
    position: relative;

    .go-prev-question {
        position: absolute;
        left: 20px;
        top: 60px;
        color: ${({ theme }) => theme.colors.gray};
        animation: ${showPrevQuestionButton} 0.7s linear;
        z-index: 2;
        img {
            width: 15px;
            height: 15px;
            vertical-align: middle;
        }
        span {
            vertical-align: middle;
            line-height: 0;
            display: inline-block;
            margin: 0 0 0 5px;
        }

        @media ${({ theme }) => theme.breakpoints.tablet} {
            left: calc(50% - 350px);
        }
    }
`;
