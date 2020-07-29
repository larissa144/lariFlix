import React from 'react';
import Menu from '../../components/Menu/menu-nav';
import BannerMain from '../../components/BannerMain'
import dadosInicias from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media(max-width: 800px){
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu/>
      <BannerMain
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"Veja agora os pagodes mais ouvidos da semana :)"}   
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />

      <Carousel
        category={dadosInicias.categorias[1]}
      />

      <Carousel
        category={dadosInicias.categorias[2]}
      />

      <Carousel
        category={dadosInicias.categorias[3]}
      />

      <Carousel
        category={dadosInicias.categorias[4]}
      />

      <Footer/>
    </AppWrapper>
  );
}

export default Home;
