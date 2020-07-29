import React from 'react';
import Logo from '../../assets/img/logo-rosa.png';
import {LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';
import {Link} from 'react-router-dom';
const Menu = () =>{
    return(

        <MenuWrapper className="Menu">
            <Link to="/">
            <LogoImage className="Logo" src={Logo} alt="LariFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;