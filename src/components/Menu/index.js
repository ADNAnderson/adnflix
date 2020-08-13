import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
// import './Menu.css';
// eslint-disable-next-line import/extensions
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="Adnflix logo" />
      </Link>

      <div className="nome">Lorena Aparecidinha S2</div>

      <Button as={Link} to="cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;
