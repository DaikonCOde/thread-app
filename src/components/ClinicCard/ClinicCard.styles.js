import styled from 'styled-components';

export const ContentClinicCard = styled.div`
    width: 90vw;
    border-radius: ${({ theme }) => theme.rounded.m};
    box-shadow: ${({ theme }) => theme.shadow.box};
    padding: 25px 30px;
    background: url(${({ bg }) => bg}) center no-repeat;
    background-size: cover;
    margin: 0 auto;
    max-width: 350px;
    position: relative;
    .overlay {
        width: 100%;
        height: 100%;
        border-radius: ${({ theme }) => theme.rounded.m};
        background: rgb(33 33 33 / 50%);
    }

    .content {
        position: relative;
        z-index: 1;
    }

    .logo {
        width: 200px;
        height: 50px;
        margin: 0 auto 30px;
        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .text {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
    }

    .decription {
        color: ${({ theme }) => theme.colors.gray};
        text-align: justify;
        margin: 30px auto;
    }
`;
