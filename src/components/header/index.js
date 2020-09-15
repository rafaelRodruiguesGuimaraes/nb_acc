import React from 'react';

import logo from '../../assets/logo_branco.png';

import { Container, Content } from './styles';

function handleScroll() {
  window.scrollTo({
    top: 600,
    left: 0,
    behavior: 'smooth',
  });
}

const Header = () => (
        <Container>
            <Content>
            <img src={logo} alt="logo" />

            <div>
                <button type="button" onClick={handleScroll}>
                    Sobre mim
                </button>
                <a href="https://api.whatsapp.com/send?phone=5511983024880&text=Ol%C3%A1%2C%20tudo%20bem%3F" target="_blank" rel="noreferrer">
                    Contato
                </a>
            </div>
            </Content>
        </Container>
);

export default Header;
