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
    width: 100%;
    padding: 0 5vw;
    overflow: hidden;

    .list-options {
        margin: 30px 0 0;
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
        animation: ${exitOption} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
    /* animacion para eliminar la pregnta actual y pasar a la anterior */
    .current-delete {
        animation: ${exitPrevOption} 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    .content-question {
        width: 100%;
    }

    .question {
        padding: 20px 25px;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 10px;
        width: 100%;
        box-shadow: ${({ theme }) => theme.shadow.box};
        transition: ${({ theme }) => theme.transition.default};
        border: 3px solid transparent;
        &:hover {
            transform: translateY(-4px);
            border: 2px solid ${({ theme }) => theme.colors.primary};
        }
    }
    .selected {
        border: 3px solid ${({ theme }) => theme.colors.primary};
    }
`;
