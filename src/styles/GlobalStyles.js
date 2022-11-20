import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
    // global styles
    body {
        background: ${({ theme }) => theme.colors.white};
        scroll-behavior: smooth; 
    }

    @media ${({ theme }) => theme.breakpoints.desktop} {
        body::-webkit-scrollbar {
            width: 6px;
            background: ${({ theme }) => theme.c_text.white};;
        }

        body::-webkit-scrollbar-thumb {
            width: 6px;
            border-radius: 5px;
            background: ${({ theme }) => theme.c_text.gray};
        }
    }

    .no-scroll {
        overflow: hidden;
        max-height: 100vh;
    }

    /* flex  */
    .d-flex {
        display: flex;
    }
    .d-block {
        display: block;
    }
    .d-flex.center {
        justify-content: center;
        align-items: center;
    }
    .d-flex.between {
        justify-content: space-between;
        align-items: center;
    }
    .d-flex.wrap {
        flex-wrap: wrap;
    }
    .gap-2 {
        gap: 20px
    }
    .gap-4 {
        gap: 40px
    }
    .d-flex.column {
        flex-direction: column;
    }


    /* ul styles */
    .list-style-circle {
        list-style: circle;
        padding: 0 0  0 20px;
    }


    /* font weight*/
    .fw-3{
        font-weight: 300;
    }
    .fw-4{
        font-weight: 400;
    }
    .fw-5{
        font-weight: 500;
    }
    .fw-7{
        font-weight: 700;
    }



    /* font-size */
    .f-12 {
        font-size: 1.2rem;
    }
    .f-14 {
        font-size: 1.4rem;
    }
    .f-16 {
        font-size: 1.6rem;
    }
    .f-18 {
        font-size: 1.8rem;
    }
    .f-20 {
        font-size: 2rem;
    }
    .f-24 {
        font-size: 2.4rem;
    }
    .f-28 {
        font-size: 2.8rem;
    }



    /* color text */
    .t-white {
        color: ${({ theme }) => theme.c_text.white};
    }
    .c-primary {
        color: ${({ theme }) => theme.colors.primary};
    }
    .c-default {
        color: ${({ theme }) => theme.c_text.principal};
    }
    .c-danger {
        color: ${({ theme }) => theme.alerts.error};
    }



    /* style text */
    .t-center {
        text-align: center;
    }

    h5.label {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.c_text.gray};
        text-transform: uppercase;
    }

    .text {
        font-size: 1.6rem;
        font-weight: 500;
    }
    .title {
        font-size: 1.8rem;
    }

    .t-light {
        font-size: 1.2rem;
        font-weight: 300;
        color: ${({ theme }) => theme.c_text.gray}
    }

    /* margin */
    .mb-3 {
        margin: 0 0 30px;
    }



    /*   components   */

    /* buttons styles*/
    .btn {
        border-radius: ${({ theme }) => theme.rounded.s};
        text-align: center;
        color: ${({ theme }) => theme.c_text.white};
        font-weight: 600;
        width: 235px;
        margin: 0 auto;
        line-height: 40px;
        display: block;
        text-transform: uppercase;
        transition: ${({ theme }) => theme.transition.default};
        /* cursor: pointer; */
        &:hover {
            background: ${({ theme }) => theme.colors.h_primary};
        }
        &:disabled {
            background: ${({ theme }) => theme.c_text.gray};
        }
    }
    .primary {
        background: ${({ theme }) => theme.colors.primary};
    }
    .border {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.h_secondary};
            color: ${({ theme }) => theme.colors.h_secondary};
            background: transparent;
        }
    }

    /* Errors */
    .error-message {
        font-size: 10px;
        font-weight: 600;
        color: ${({ theme }) => theme.alerts.error};
        display: block;
        margin: 3px 0 0 0;
        letter-spacing: 1.2px;
    }
    /* overlay app */

    .overlay {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.colors.overlay};
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
`;
