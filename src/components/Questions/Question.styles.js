import styled, { keyframes } from 'styled-components';

const nextOption = keyframes`
    0% {
        transform: translateX(400px)
    }
    100% {
        transform: translateX(0px)
    }
`;

const prevOption = keyframes`
    0% {
        transform: translateX(-400px)
    }
    100% {
        transform: translateX(0px)
    }
`;

const exitOption = keyframes`
    0% {
        transform: translateX(0px)
    }
    100% {
        transform: translateX(-400px)
    }
`;
const exitPrevcOption = keyframes`
    0% {
        transform: translateX(0px)
    }
    100% {
        transform: translateX(400px)
    }
`;

export const ContentQuestions = styled.div.attrs({
    className: 'content-questions'
})`
    margin: 60px auto 0;
    width: 100%;
    padding: 5vw;
    overflow: hidden;

    .list-options {
        margin: 30px 0 0;
    }
    /* animacion inicial y al entrar nuevos components */
    .init,
    .next {
        animation: ${nextOption} 0.8s linear;
    }
    /* animacion cuando regresamos a la anterior pregunta */
    .prev {
        animation: ${prevOption} 0.8s linear;
    }
    /* animacion para eliminar la pregnta y pasar a la siguiente */
    .exit {
        animation: ${exitOption} 0.8s linear;
    }
    /* animacion para eliminar la pregnta actual y pasar a la anterior */
    .current-delete {
        animation: ${exitPrevcOption} 0.8s linear;
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
