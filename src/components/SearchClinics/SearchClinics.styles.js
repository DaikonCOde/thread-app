import styled from 'styled-components';

export const ContentSearchClinics = styled.div.attrs({
    className: 'd-flex center column gap-4'
})`
    width: 90%;
    max-width: 700px;
    margin: 80px auto;

    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.rounded.m};
    padding: 40px;
    box-shadow: 0 0px 6px 15px rgb(0 0 0 / 20%);
`;
