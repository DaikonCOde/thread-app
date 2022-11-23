import styled from 'styled-components';

export const ContentClinic = styled.div`
    max-height: calc(85vh - 60px);
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 3px;
        border-radius: 3px;
        background: ${({ theme }) => theme.colors.white};
    }
    &::-webkit-scrollbar-thumb {
        width: 3px;
        border-radius: 3px;
        background: ${({ theme }) => theme.colors.gray};
    }
    .header {
        margin: 0 0 40px 0;
        .content-logo {
            width: 40%;
            position: relative;
            .logo {
                width: 100%;
                object-fit: cover;
            }
            .flag {
                position: absolute;
                top: 0px;
                right: -10px;
                width: 20px;
                height: 20px;
                border-radius: ${({ theme }) => theme.rounded[50]};
            }
        }
        .title {
            width: 60%;
        }
    }

    .features {
        flex-wrap: wrap;
        gap: 15px;
        .feature {
            padding: 15px 10px;
            border: 2px solid ${({ theme }) => theme.colors.gray};
            border-radius: ${({ theme }) => theme.rounded.m};
            width: calc(50% - 8px);

            .content {
                margin: 10px auto 0;
                width: 100%;

                img {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                }
            }
        }
    }

    .gallery {
        gap: 15px;
        .image-item {
            width: 20vw;
            max-width: 90px;
            height: 20vw;
            max-height: 90px;
            border-radius: ${({ theme }) => theme.rounded.s};
            box-shadow: ${({ theme }) => theme.shadow.box};
            position: relative;
            img {
                border-radius: ${({ theme }) => theme.rounded.s};
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        @media ${({ theme }) => theme.breakpoints.tablet} {
            gap: 20px;
            .image-item {
                width: 90px;
            }
        }
    }

    .btn {
        margin: 50px auto 0;
    }
`;
