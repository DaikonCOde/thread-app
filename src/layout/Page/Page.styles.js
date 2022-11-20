import styled from 'styled-components';

export const ContentPageLayout = styled.section`
    padding: 40px 15px;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.bg_gradient};
    position: relative;
    overflow: hidden;
    &:before {
        background: url('./img/bg_man.png') no-repeat center center;
        background-size: cover;
        content: '';
        position: fixed;
        width: 100%;
        height: 70vh;
        right: 0;
        bottom: 0;
        opacity: 0.5;

        @media ${({ theme }) => theme.breakpoints.tablet} {
            width: 80%;
            height: 60vh;
        }
        @media ${({ theme }) => theme.breakpoints.laptop} {
            width: 90%;
            height: 70vh;
            background-size: contain;
        }
    }
`;
