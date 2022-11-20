import styled from 'styled-components';

export const ContentCustomInput = styled.div`
    width: 100%;
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
                border-color: ${({ theme }) => theme.colors.primary};
                box-shadow: ${({ theme }) => theme.shadow.input_focus};
            }
        }
    }
`;
