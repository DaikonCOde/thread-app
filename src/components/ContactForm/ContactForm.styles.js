import styled from 'styled-components';

export const ContentContactForm = styled.div`
    width: 100%;

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

    .btn {
        margin: 40px auto 0;
    }
`;
