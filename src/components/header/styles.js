import styled from 'styled-components';

export const Container = styled.div`
    background-image: linear-gradient(90deg, #00406b, #93bc00);
    padding: 16px;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    img {
        width: 128px;
    }

    div {
        display: flex;

        button {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        font-size: 18px;
        margin-right: 16px;
        cursor: pointer;
        transition: color 0.2s;
        border: 0;
        background: none;

        &:hover {
            color: #00406b;
        }
    }

        a {
            font-family: 'Roboto', sans-serif;
            color: #fff;
            font-size: 18px;
            margin-right: 16px;
            cursor: pointer;
            transition: color 0.2s;

            &:hover {
                color: #00406b;
            }
        }
    }
`;
