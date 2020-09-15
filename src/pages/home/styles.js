import styled from 'styled-components';
import background from '../../assets/paralax.jpg';
import negociation from '../../assets/negociation.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const Profile = styled.div`
    max-width: 900px;
    margin-top: 64px;

    img {
        width: 256px;
        border-radius: 50%50%;
        transition: 0.2s
    }

    img:hover {
            transform: translateY(-2px);
        }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 14px;
        color: #555;

        strong {
            font-size: 24px;
        }

        p {
            font-size: 16px;
        }
    }
`;

export const Image = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    margin-top: 64px;
    background: url(${background}) no-repeat center fixed;
    background-size: cover;

    align-content: center;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;
        font-size: 48px;
        font-family: sans-serif;
        top: 0px;
        cursor: default;
    }
`;

export const Description = styled.div`
    margin: 64px 0;
    max-width: 900px;
    height: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 42px;
    color: #555;

    h1 {
        margin-bottom: 24px;

        strong {
            font-size: 36px;
        }
    }

    p {
        font-size: 24px;
    }

    strong {
        font-size: 24px;

        a {
            text-decoration: none;
        }
    }
`;

export const NegociationBackground = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    margin-top: 600px;
    background: url(${negociation}) no-repeat center fixed;
    background-size: cover;

    align-content: center;
    align-items: center;
    justify-content: center;

    strong {
        color: #fff;
        font-size: 36px;
        font-family: sans-serif;
        top: 0px;
        cursor: default;
    }
`;

export const Contact = styled.div`

    display: flex;
    align-items: center;
    margin: 64px auto;

    img {
        width: 48px;
        margin-right: 48px;
    }
`;
