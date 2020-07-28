import React from 'react';
import Logo from '../../assets/img/logo-rosa.png';
import {LogoImage, MenuWrapper} from './style.js';
import Button from '../Button';

const Menu = () =>{
    return(

        <MenuWrapper className="Menu">
            <a href="/">
            <LogoImage className="Logo" src={Logo} alt="LariFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;