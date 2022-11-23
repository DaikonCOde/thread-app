import styled from 'styled-components';

export const ContentContactForm = styled.div`
    width: 90%;
    max-width: 700px;
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.rounded.m};
    margin: 50px auto 0;
    padding: 40px 20px;
    box-shadow: 0 0px 6px 15px rgb(0 0 0 / 20%);

    @media ${({ theme }) => theme.breakpoints.tablet} {
        padding: 40px;
    }

    .select-gender {
        width: 80vw;
        margin: 0 auto 30px;
        display: flex;
        gap: 20px;
        label {
            font-size: 14px;
            line-height: 14px;
            input {
                vertical-align: bottom;
                display: inline-block;
                margin: 0 5px 0 0;
            }
        }
    }

    .accept-terms {
        width: 80vw;
        margin: 0 auto;
        label input {
            display: inline-block;
            vertical-align: middle;
            margin: 0 10px 0 0;
            color: ${({ theme }) => theme.c_text.gray};
        }
    }

    .btn {
        margin: 40px auto 0;
    }
`;
