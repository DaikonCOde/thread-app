import styled, { keyframes } from 'styled-components';

const nextOption = keyframes`
    0% {
        transform: translateX(1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;
const exitPrevOption = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(1000px);
        opacity: 0;
    }
`;

const prevOption = keyframes`
    0% {
        transform: translateX(-1000px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const exitOption = keyframes`
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-1000px);
        opacity: 0;
    }
`;

export const ContentQuestions = styled.div.attrs({
    className: 'content-questions'
})`
    margin: 80px auto 0;
    width: 90%;
    max-width: 700px;

    padding: 0 5vw 30px;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.rounded.m};
    padding: 40px 20px;
    box-shadow: 0 0px 6px 15px rgb(0 0 0 / 20%);

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 72vh;
        width: 100%;
        flex-direction: column;
        max-width: 700px;
        @media ${({ theme }) => theme.breakpoints.tablet} {
            height: 70vh;
        }
    }

    .title {
        position: absolute;
        top: 0;
    }

    .list-options {
        margin: 50px 0 0;
        flex-wrap: wrap;
        width: 100%;
    }
    /* animacion inicial y al entrar nuevos components */
    .init,
    .next {
        animation: ${nextOption} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
    /* animacion cuando regresamos a la anterior pregunta */
    .prev {
        animation: ${prevOption} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
    /* animacion para eliminar la pregnta y pasar a la siguiente */
    .exit {
        user-select: none;
        pointer-events: none;
        animation: ${exitOption} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
    /* animacion para eliminar la pregnta actual y pasar a la anterior */
    .current-delete {
        animation: ${exitPrevOption} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    .content-question {
        width: 100%;
        max-width: 350px;
    }

    .question {
        padding: 10px 25px;
        background: ${({ theme }) => theme.c_text.white};
        border-radius: 10px;
        width: 100%;
        box-shadow: ${({ theme }) => theme.shadow.box};
        transition: ${({ theme }) => theme.transition.default};
        border: 3px solid transparent;
        gap: 10px;
        &:hover {
            transform: translateY(-4px);
            border: 3px solid ${({ theme }) => theme.alerts.blue};
            box-shadow: 0 5px 20px 3px #0000004d;
        }

        img {
            width: 50px;
            height: 50px;
        }
        span {
            width: 100%;
        }
    }

    .square {
        width: 31.4vw;
        max-width: 220px;
        height: 120px;
        .question {
            padding: 10px;
            height: 100%;
            justify-content: center;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .selected {
        border: 3px solid ${({ theme }) => theme.alerts.blue};
        box-shadow: 0 5px 20px 3px #0000004d;
    }
`;
