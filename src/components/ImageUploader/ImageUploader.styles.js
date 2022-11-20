import styled from 'styled-components';

export const ContentImageUploader = styled.div.attrs({
    className: 'content-image-uploader'
})`
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    .title {
        margin: 0px 0 60px;
    }

    .image-uploader-wrapper {
        width: 90%;
        max-width: 500px;
        margin: 0 auto;
    }

    .image-uploader {
        width: 100%;
        margin: 0 auto 50px;
        background: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.rounded.m};
        border: 2px dashed ${({ theme }) => theme.c_text.gray};
        padding: 20px 15px;
        transition: ${({ theme }) => theme.transition.default};
        .btn {
            width: 150px;
            margin: 0 auto;
        }

        .drag-here {
            margin: 10px auto 0;
            color: ${({ theme }) => theme.c_text.gray};
        }
    }

    .content-images-list {
        .image-item {
            width: 80px;
            height: 80px;
            border-radius: ${({ theme }) => theme.rounded.s};
            box-shadow: ${({ theme }) => theme.shadow.box};
            position: relative;
            img {
                border-radius: ${({ theme }) => theme.rounded.s};
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .remove-image {
                position: absolute;
                top: -10px;
                right: -10px;
                background: ${({ theme }) => theme.colors.white};
                border-radius: ${({ theme }) => theme.rounded[50]};
                padding: 5px 0;
                width: 20px;
                height: 20px;
                img {
                    width: 10px;
                    height: 10px;
                    display: block;
                    margin: 0 auto;
                }
            }
        }

        .btn {
            margin: 40px auto 0;
        }
    }
`;
