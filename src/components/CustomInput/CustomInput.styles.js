import styled from 'styled-components';

export const ContentCustomInput = styled.div`
    width: 80vw;
    margin: 0 auto 20px;

    label {
        display: block;
        font-size: 1.4rem;

        input {
            padding: 10px 16px;
            border-radius: ${({ theme }) => theme.rounded.s};
            background: ${({ theme }) => theme.colors.white};
            font-size: 1.2rem;
            width: 100%;
            display: block;
            margin: 5px 0 0 0;
            border: 2px solid ${({ theme }) => theme.colors.gray};
            box-shadow: ${({ theme }) => theme.shadow.input};
            transition: ${({ theme }) => theme.transition.default};

            &:focus {
                border-color: ${({ theme }) => theme.colors.secondary};
                box-shadow: ${({ theme }) => theme.shadow.input_focus};
            }
        }
    }

    .error-message {
        font-size: 10px;
        font-weight: 600;
        color: ${({ theme }) => theme.alerts.error};
        display: block;
        margin: 3px 0 0 0;
    }
`;
