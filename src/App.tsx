
import './App.css'
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hamburguer_inicio from './assets/hamburguer_inicio.png'
import seta from './assets/seta.png';
import f7 from './assets/f7.png';
import P1 from './assets/p1.png';
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f3.png';
import f4 from './assets/f4.png';
import f5 from './assets/f5.png';
import b2 from './assets/b2.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import sobre from './assets/sobre.png';


function App() {
  const [telefone, setTelefone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTelefone(maskPhone(e.target.value));
};

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };


  return (
   <Container> 
    
    {/*INICIO DO MENU DE NAVEGAÇÃO*/ }
      <Navbar expand="lg" className="bg-body-tertiary menu_cor" >
        <Navbar.Brand href="#home" style={{color: "white"}}>Burgue Master</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
             <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#promocoes">Promoções</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#menu">Cardápio</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#sobre">Quem somos</Nav.Link>
              <Nav.Link style={{color: "white"}} href="#reserve">Reservas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    {/*FIM DO MENU DE NAVEGAÇÃO*/}

    
    {/*INICIO DOS CÓDICOS DO BLOCO HOME*/ }
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="detail-box">
              <h2>Burgue Master</h2>
              <p style={{fontSize: "20px", textAlign: "justify", textIndent: "3%"}}>
                Bem-vindo á Burgue Master, onde cada Hambúrguer é preparado com ingrediente selacionados e grelhdo no ponto perfeito para você.
              </p>

              <p style={{fontSize: "20px", textAlign: "justify", textIndent: "3%"}}>
                Nossa missão é oferecer uma experiência gastronomica única, combinado sabor, qualidade é um toque de exclusividade.
              </p>

              <p style={{fontSize: "20px", textAlign: "justify", textIndent: "3%"}}>
                Aqui, você encontra Hambúrgueres artesanais suculentos irresistíveis e molhos especiais - Tudo feito com paixão e cuidado.
              </p>
          </div>
        </div>
            <div className="col-md-6 col-lg-6">
            <div className="detail-box">
              <img src={hamburguer_inicio} className='react img_menu' alt="hamburguer" />
        </div>
       </div>
     </div>
    {/*FIM DOS CÓDICOS DO BLOCO HOME*/ }
    
    
    {/*INICIO DOS CÓDICOS DO BLOCO DE PROMAÇÃO*/ }
     <section className="offer_section layout_padding-bottom" id="promocoes">
        <div className="heading_container heading_center">
          <div className = "row">
            <div className = "cols">
              <h2>Promoções</h2>
            </div>
            <div className = "cols">
              <a href = "#home">
                <img src = {seta} className='react' alt="Retornar" width="30px" height="30px"/>
              </a>
            </div>
        </div>
        </div>
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src = {f7} className='react' alt="Promoção 01" width="40%"/>
                  </div>
                  <div className="detail-box">
                    <h5 style={{textAlign: "center"}}>
                        Toda Quinta-feira é dia de
                    </h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src = {P1} className='react' alt="Promoção 02" width="40%"/>
                  </div>
                  <div className="detail-box">
                    <h5 style={{textAlign: "center"}}>
                      No Dia da Pizza você tem
                    </h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/*FIM DOS CÓDICOS DO BLOCO DE PROMAÇÃO*/ }

    {/*INICIO DOS CÓDICOS DO BLOCO DE cardápio*/ }
            <section className="food_section layout_padding-bottom" id="menu">
        <div className="container">
          <div className="heading_container heading_center">
            <div className = "row">
              <div className = "cols">
                <h2>
                  Nosso Cardápio
                </h2>
              </div>
              <div className = "cols">
                <a href = "#home">
                  <img src = {seta} className='react' alt="Retornar" width="30px"/>
                </a>
              </div>
          </div>
          <div className="filters-content">
            <div className="row grid">
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {f1} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Hambúrgue de Frango Crocante Agridoce
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Um suculento filé de frango empanado e crocante, servido com alface americana, picles e um delicioso molho agridoce picante, dentro de um pão macio e levemente tostado
                      </p>
                      <div className="options">
                        <h6>
                          R$ 45,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {f2} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Hambúrguer clássico de cheddar e bacon
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Um hambúrguer suculento com um generoso queijo cheddar derretido, fatias crocantes de bacon, cebola roxa e alface fresca, tudo em um pão de brioche com gergelim. O molho especial escorre de forma irresistível.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 38,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {f3} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Hambúrguer Mexicano com Guacamole
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                       Um hambúrguer picante com queijo pepper jack derretido, fatias de jalapeño, e uma colherada generosa de guacamole fresco, tudo em um pão escuro para um toque rústico.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 60,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {f4} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Hambúrguer de Costela Desfiada com BBQ
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Um hambúrguer com uma camada robusta de carne de costela desfiada e cozida lentamente, coberta com molho barbecue defumado e anéis de cebola frita.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 70,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all fries">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {f5} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Hambúrguer Vegetariano de Haloumi Grelhado
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Uma opção sem carne apresentando um grosso pedaço de queijo haloumi grelhado, servido com abobrinha e pimentões assados, tomate e um pesto de manjericão.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 35,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {b2} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Batata Frita Ondulada
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Nossas batatinhas onduladas são a pedida perfeita! Crocantes na medida certa e ideais para mergulhar no seu molho favorito. Impossível comer uma só.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 20,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {p4} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Pizza de Carne Seca com Cream Cheese e Coalho
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Uma combinação rica e brasileira, com carne seca desfiada e saborosa, pontuada por cubinhos de queijo coalho grelhado e a suavidade do cream cheese, finalizada com rodelas de cebola roxa para um toque agridoce.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 85,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {p2} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Pizza Margherita Autêntica
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        A simplicidade e o sabor da tradição italiana. Esta pizza Margherita apresenta molho de tomate vibrante, mussarela fresca derretida em pedaços e folhas de manjericão verde brilhante, com um fio de azeite e o calor convidativo que emana da massa.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 80,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {p3} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Pizza de Frango com Catupiry Cremoso
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Uma explosão de sabor com pedaços suculentos de frango desfiado e temperado, generosas colheradas de catupiry cremoso que se derretem na boca, e um toque de cebolinha fresca picada, tudo sobre uma base de queijo e molho de tomate.
                      </p>
                      <div className="options">
                        <h6>
                          R$ 80,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {s1} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Brownie com Sorvete
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                        Aquele clássico que nunca erra! Nosso brownie quentinho e molhadinho, servido com sorvete de creme geladíssimo e uma calda irresistível. Não pule a sobremesa!
                      </p>
                      <div className="options">
                        <h6>
                          R$ 25,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {s2} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Milkshake de Chocolate
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                       Dia de calor? Milkshake de Chocolate cremoso, com chantilly e todo o sabor que você merece. O acompanhamento gelado ideal para fechar o seu pedido. Qual o seu sabor favorito de milkshake?"
                      </p>
                      <div className="options">
                        <h6>
                          R$ 19,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src = {s3} className='react img_cardapio' alt="Cardápio 01" />
                    </div>
                    <div className="detail-box">
                      <h5 style={{textAlign: "center"}}>
                        Cheesecake com Frutas Vermelhas
                      </h5>
                      <p style={{textAlign: "center",textIndent: "3%"}}>
                       Feche com chave de ouro: A base crocante, o creme aveludado da cheesecake e a acidez suave da nossa geleia de frutas vermelhas. Uma sobremesa leve e inesquecível!
                      </p>
                      <div className="options">
                        <h6>
                          R$ 30,00
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        </div>
         
      </section>
    {/*FIM DOS CÓDICOS DO BLOCO DE cardápio*/ }
    {/* INÍCIO DO BLOCO QUEM SOMOS */}
    <section className="about_section layout_padding" id="sobre">
        <div className="heading_container heading_center">
          <div className = "row">
            <div className = "cols">
              <h2>
                Sobre Nós
              </h2>
            </div>
            <div className = "cols">
              <a href = "#home">
                <img src = {seta} className='react' alt="Retornar" width="30px"/>
              </a>
            </div>
        </div>
        </div>
        <br/><br/>
        <div className="container  ">

          <div className="row">
            <div className="col-md-5">
              <div className="img-box">
                <img src = {sobre} className='react' width={"45%"}/>
              </div>
            </div>
            <div className="col-md-7">
              <div className="detail-box">
                <div className="heading_container">
                  <h3 style={{textAlign: "center"}}>
                    Burgue Master — o sabor em seu ponto máximo.
                  </h3>
                </div>
                <p style={{textAlign: "justify", textIndent: "3%"}}>
                  Na Burgue Master, acreditamos que um hambúrguer é mais do que apenas uma refeição; é uma experiência. Nossa jornada começou com uma paixão inabalável por ingredientes frescos, carne de alta qualidade e a busca incessante pelo sabor perfeito. Queríamos criar um lugar onde cada mordida fosse uma celebração da culinária artesanal.

                  Somos um time de apaixonados por hambúrgueres, dedicados a selecionar os melhores cortes de carne, os pães mais macios e os vegetais mais frescos. Nossos molhos são criações exclusivas, desenvolvidos para complementar e elevar cada sabor. Cada hambúrguer é montado com carinho e grelhado no ponto ideal, garantindo uma explosão de sabor e suculência.

                  Mais do que uma hamburgueria, a Prime Burguer é um espaço onde a qualidade encontra a tradição, e a inovação se mistura com o rústico. Convidamos você a fazer parte da nossa história, desfrutando de uma experiência gastronômica autêntica e inesquecível.
                </p>
                <p style={{textAlign: "justify", textIndent: "3%"}}>
                  Tudo é feito com paixão, qualidade e um toque de exclusividade — do preparo à apresentação.
                </p>
                <p style={{textAlign: "justify", textIndent: "3%"}}>
                  Venha conhecer onde o sabor encontra a sua melhor versão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/><br/><br/>
    {/* FINAL DO BLOCO QUEM SOMOS */}
     {/* INÍCIO DO BLOCO RESERVAS */}
      <section className="book_section layout_padding" id = "reserve">
    <div className="container">
      <div className="heading_container">
        <div className = "row">
          <div className = "cols">
            <h2>
              Faça sua Reserva
            </h2>
          </div>
          <div className = "cols">
            <a href = "#home">
                <img src = {seta} className='react' alt="Retornar" width="30px"/>
              </a>
          </div>
      </div>
      </div>
      <br/><br/>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form action="">
              <br/><br/>
              <div>
                <input type="text" className="form-control" placeholder="Seu Nome" />
              </div>
              <br/>
              <div>
                <input type="text" className="form-control" value={telefone}
          onChange={handlePhoneChange} placeholder="Seu whatsapp" />
              </div>
              <br/>
              <div>
                <input type="email" className="form-control" placeholder="Seu E-Mail" />
              </div>
              <br/>
              <div>
                <select className="form-control nice-select wide">
                  <option value="" disabled selected>
                    Quantidade de Pessoas?
                  </option>
                  <option value="">
                    2
                  </option>
                  <option value="">
                    3
                  </option>
                  <option value="">
                    4
                  </option>
                  <option value="">
                    5
                  </option>
                  <option value="">
                    6
                  </option>
                </select>
              </div>
              <br/>
              <div>
                <input type="date" className="form-control"/>
              </div>
              <br/>
              <div className="btn_box">
                <button>
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container ">
            <div id="googleMap" style={{marginLeft: "3%"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3566484378107!2d-43.561412623806795!3d-22.90021253763782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be15839e68c4f%3A0x588a284ae162bc38!2sSenac%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1764113166653!5m2!1spt-BR!2sbr" width="600" height="450" style={{border: "0"}} loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    {/* FINAL DO BLOCO RESERVAS */}
   
    </Container>
  )
}

export default App
