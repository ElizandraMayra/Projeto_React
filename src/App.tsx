import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hamburguer_inicio from './assets/hamburguer_inicio.png'


function App() {
  

  return (
   <Container> 
    
    {/*INICIO DO MENU DE NAVEGAÇÃO*/ }
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">Prime Hambúrguer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Promoções</Nav.Link>
            <Nav.Link href="#link">Quem somos</Nav.Link>
            <Nav.Link href="#link">Cardápio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    {/*FIM DO MENU DE NAVEGAÇÃO*/}

    
    {/*INICIO DOS CÓDICOS DO BLOCO HOME*/ }
      <div className="row">
        <div className="col-md-7 col-lg-7">
          <div className="detail-box">
              <h2>The Prime Burgue</h2>
              <p style={{fontSize: "20px", textAlign: "justify", textIndent: "3%"}}>
                Bem-vindo á Prime Burguer, onde cada Hambúrguer é preparado com ingrediente selacionados e grelhdo no ponto perfeito para você.
              </p>

              <p style={{fontSize: "20px", textAlign: "justify", textIndent: "3%"}}>
                Nossa missão é oferecer uma experiência gastronomica única, combinado sabor, qualidade é um toque de exclusividade.
              </p>

              <p style={{fontSize: "20px", textAlign: "justify", textIndent: "3%"}}>
                Aqui, você encontra Hambúrgueres artesanais suculentos irresistíveis e molhos especiais - Tudo feito com paixão e cuidado.
              </p>
          </div>
        </div>
            <div className="col-md-7 col-lg-7">
            <div className="detail-box">
              <img src={hamburguer_inicio} className='react img_menu' alt="hamburguer" />
        </div>
       </div>
     </div>
    {/*FIM DOS CÓDICOS DO BLOCO HOME*/ }
    
    
    {/*INICIO DOS CÓDICOS DO BLOCO DE PROMAÇÃO*/ }
    
    {/*FIM DOS CÓDICOS DO BLOCO DE PROMAÇÃO*/ }

    {/*INICIO DOS CÓDICOS DO BLOCO DE cardápio*/ }

    {/*FIM DOS CÓDICOS DO BLOCO DE cardápio*/ }
   
    </Container>
  )
}

export default App
