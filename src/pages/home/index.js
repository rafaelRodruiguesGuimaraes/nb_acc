import React from 'react';

import {
  Container, Profile, Image, Description, NegociationBackground, Contact,
} from './styles';
import profile from '../../assets/profile.jpg';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';

const Home = () => (
    <Container>
        <Profile>
            <img src={profile} alt="Nathanael" />
            <div>
                <strong>Nathanael Borges</strong>
                <p>"Corpo e mente são uma coisa só."</p>
            </div>
        </Profile>

        <Image>
            <p>Sobre Nathanael Borges</p>
        </Image>

        <Description>
            <h1>O que você deseja que o <strong>seu corpo explique?</strong> </h1>

            <p>
                Fui formado, treinado e sou autorizado pelo <strong>O Corpo Explica </strong>
                <br />
                para fazer esse tipo de análise.
            </p>
            <p>
                E se você quiser saber mais sobre esse tema, bater um papo para entender um
                pouco mais sobre BAIXA ESTIMA e entender como a sua mente funciona para que
                você consiga SE LIVRAR DA BAIXA ESTIMA e VIVER TODO O SEU POTENCIAL.
            </p>
            <strong><a href="https://api.whatsapp.com/send?phone=5511983024880&text=Ol%C3%A1%2C%20tudo%20bem%3F" target="_blank" rel="noreferrer">Eu estou com um canal de atendimento online.</a></strong>
            <p>
                Eu posso e quero te ajudar. Ter acesso a esse conhecimento mudou a minha
                vida e hoje eu utilizo ele para ajudar pessoas como você.
            </p>
            <p>
                Você pode me chamar no inbox ou me mandar mensagens pelo
                <br />
                <strong>WhatsApp +55 (11) 98302-4880</strong>.
                Eu posso te mandar algum material, algum estudo de caso que seja parecido com
                o que você está enfrentando hoje e nós podemos também agendar uma análise pra você.
            </p>
            <p>
                A análise é rápida, é feita com roupa normal do dia-a-dia, ela pode ser
                 gravada para você assistir depois ou mostrar para alguém se fizer sentido
                 pra você, e melhor, o preço é superacessível e o resultado vai te surpreender.
            </p>
            <p>
                Depois dessa análise você vai enxergar o mundo com um outro olhar,
                suas escolhas serão mais leves e o mais legal é que você vai aprender
                a se respeitar e a respeitar os outros.
            </p>
        </Description>

        <NegociationBackground>
            <strong>Me chame aí, vamos bater um papo. Você vai gostar.</strong>
        </NegociationBackground>

        <Contact>
            <a href="https://api.whatsapp.com/send?phone=5511983024880&text=Ol%C3%A1%2C%20tudo%20bem%3F" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp"/></a>
            <a href="https://www.facebook.com/nathanael.borges.3" target="_blank" rel="noreferrer" ><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/nborges91/?hl=en" target="_blank" rel="noreferrer" ><img src={instagram} alt="instagram"/></a>
        </Contact>

    </Container>
);

export default Home;
