import React from 'react';
import './styles/App.css';
import  Header from './components/Header'
import Home from './components/Home'
import Categorias from './components/Categorias'
import Eventos from './components/Eventos'
import Filtro from './components/Filtro'
import Footer from './components/Footer'


export default () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Categorias/>
      <Eventos/>
      <Filtro/>
      <Footer/>
    </div>
  )
}