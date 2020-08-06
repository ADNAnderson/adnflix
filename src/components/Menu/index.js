import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import './Menu.css';
import {LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage className="Logo" src={Logo} alt="Adnflix logo" />
            </a>

            <div className="nome" >Lorena Aparecidinha S2</div>

            <Button as="a" href="/">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;