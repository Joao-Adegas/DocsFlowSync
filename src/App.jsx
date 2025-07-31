import "../src/App.sass"

function App() {

  return (
    <>
      <header>
        <div className="top-header" id="inicio">
          <figure>
            <img src="../Logo.png" alt="logo-img" className="logo-header" />
          </figure>
        </div>

        <div className="navigation">
          <ul>
            <li><a href="#about-team">Sobre Nós</a></li>
            <li><a href="#docs">Documentação</a></li>
          </ul>
        </div>

      </header>

      <main>
        <section className="top-main">
          <div className="img-mascote-container">
            <img src="../mascote.png" alt="mascote" className="mascote" />
          </div>
          <div className="slogan">
            <p>Onde <span className="palavra-destaque">inovação</span> e <span className="palavra-destaque">automação</span> se encontram para <span className="palavra-destaque">organizar</span> eventos <div className="palavra-destaque">perfeitos.</div></p>
            <hr className="linha" />
            <p className="subtitulo">
              Gestão <span className="palavra-destaque">Automatica,</span> Resultados <span className="palavra-destaque">Reais</span>
            </p>
          </div>

          <div id="docs" className="documentacao">
            <a href="public/hackathon_documentacao.pdf" className="link-dowload" download={"FlowSync_Documentacao.pdf"}>Acesse a documentação</a>
            <img src="../downloads.png" alt="seta" className="imagem-download"/>
          </div>
          
        </section>

        <section className="section-2">

          <div className="frase-efeito">
            <div className="container-frase">
              <p className="frase">Organize eventos com agilidade, focando no que realmente importa: a experiência dos participantes</p>
              <span className="destaque-logo">FlowSync</span>
            </div>
            <hr className="hr-section2" />
          </div>
          <div className="container-imagens">
            <figure>
              <img src="../Banner1.png" alt="banner" className="banner1" />
            </figure>
            <figure>
              <video src="/Gif.MP4" autoPlay loop muted playsInline className="video"/>
            </figure>
          </div>
        </section>

        <section className="cards-beneficios">
          <div className="card">
            <figure className="imagem-card-container">
              <img src="../event 1.png" alt="" className="imagem-card" />
            </figure>
            <p>Organize eventos de forma ágil e fácil</p>
          </div>
          <div className="card">
            <figure className="imagem-card-container">
              <img src="../calendar (2) 1.png" alt="" className="imagem-card" />
            </figure>
            <p>Crie e organize agendas com mais facilidade</p>
          </div>
          <div className="card">
            <figure className="imagem-card-container">
              <img src="../mail 1.png" alt="" className="imagem-card" />
            </figure>
            <p>Envie emails automáticos com a ajuda da IA</p>
          </div>
        </section>


        <section className="about" id="sobre-o-projeto">
          <h2 className="title">Sobre o projeto</h2>

          <div className="container">
            <div className="container-about">
              <p className="paragrafo-about">
                O projeto visa agilizar a criação de agendas para eventos e visitas, com uma interface intuitiva para gerenciar horários, participantes e locais. Ele oferece uma visualização clara dos eventos e conta com inteligência artificial para sugerir ideias e otimizações, facilitando decisões mais eficientes.
              </p>
            </div>

            <div className="container-img-about">
              <figure>
                <img src="../mascote.png" alt="mascote-img" className="mascote-img" />
              </figure>
            </div>
          </div>

        </section>

        <section className="about-team" id="about-team">
          <h3 className="title-about">Sobre Nós</h3>
          <div className="container-about-team">
            <div className="about-team-text">
              <p>Inovação que <span className="destaque-texto-about">transforma</span> o simples em excepcional, com soluções criativas e personalizadas para você.</p>
            </div>

            <div className="container-videoPitch">
              <video src="/VideoPitch.MP4" className="video-pitch" controls />
            </div>
          </div>

        </section>

        <section className="devs">
          <h3 className="title-devs">Quem são os desenvolvedores?</h3>

          <div className="col-top">
            <div className="container-img-dev">
              <figure>
                <img src="../Evelyn.png" alt="img-dev-Evelyn" className="img-devs"/>
              </figure>
              <p className="nameDev">Evellyn Sene</p>
              <p className="skillDev">Front-End</p>
            </div>

            <div className="container-img-dev">
              <figure>
                <img src="../Joao.png" alt="img-dev-Joao" className="img-devs"/>
              </figure>
              <p className="nameDev">João Adegas</p>
              <p className="skillDev">Fullstack</p>
            </div>

            <div className="container-img-dev">
              <figure>
                <img src="../Livia.png" alt="img-dev-Livia" className="img-devs"/>
              </figure>
              <p className="nameDev">Livia Melo</p>
              <p className="skillDev">UIxUX</p>
            </div>
          </div>

          <div className="col-bottom">
            <div className="container-img-dev">
              <figure>
                <img src="../Duda.png" alt="img-dev-Duda" className="img-devs"/>
              </figure>
              <p className="nameDev">Maria Lima</p>
              <p className="skillDev">Front-End</p>
            </div>

            <div className="container-img-dev">
              <figure>
                <img src="../Thifany.png" alt="img-dev-Thifany" className="img-devs"/>
              </figure>
              <p className="nameDev">Thifany Oliveira</p>
              <p className="skillDev">Fullstack</p>
            </div>

            <div className="container-img-dev">
              <figure>
                <img src="../Yngrid.png" alt="img-dev-Yngrid" className="img-devs"/>
              </figure>
              <p className="nameDev">Yngrid Baeta</p>
              <p className="skillDev">Fullstack</p>
            </div>
          </div>

        </section>
      </main>
      
      <footer>
        <div className="top-footer">
          <figure>
            <img src="../Logo.png" alt="logo-footer" className="logo-footer" />
          </figure>

          <div className="links-footer">
            <a href="#inicio" className="link">Início</a>
            <a href="#about-team" className="link">Sobre Nós</a>
            <a href="#docs" className="link">Documentação</a>
            <a href="#sobre-o-projeto" className="link">Sobre o Projeto</a>
          </div>
        </div>


        <div className="container-copyright">
          <p className="copyright">@FlowSync 2025</p>
        </div>
      </footer>
    </>
  )
}

export default App
