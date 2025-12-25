import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LandingPage = () => {
    return (
        <>
        <header>
          <div className="logo">
            <h2>irina: <span> sula </span></h2>
            <div className="chevrons">
              <i className="fa-solid fa-chevron-right"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>

          <div className="flex-container">
            <nav className="menu">
              <div className="menu_item">
                <a href="#contacts">contacts</a>
              </div>
              <div className="menu_item">
                <a href="#skills">skills</a>
              </div>
              <div className="menu_item">
                <a href="#projects">projects</a>
              </div>
              <div className="menu_item">
                <a href="#about">about</a>
              </div>
            </nav>

            <div className="header">
              <div className="main-img-wrap">
                <img className="main-img" src="/images/main-img.jpg" alt="" />
              </div>

              <h1>
                Software <br />
                Developer<br />
                Portfolio
              </h1>
            </div>
          </div>
          <div className="chevrons-left">
            <i className="fa-solid fa-chevron-left"></i>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </header>

    <main>
      <section id="about">
        <h2 className="section-title red">01 about</h2>
        <div className="angles-section">
          <p>
            I am a junior software developer with hands-on experience in building web, mobile, and game applications. I work mainly with React, React Native, Node.js, SQL, and Unity (C#).
          </p>
          <p>
            I have developed full-stack applications with authentication, database integration, Dockerized environments, and cloud deployment on AWS. I also enjoy game development and have created both 2D and 3D games using Unity.
          </p>
          <p>
            I am motivated by problem-solving, continuous learning, and building practical applications with real users in mind. I am currently looking for an opportunity to grow as a software developer and contribute to meaningful projects.
          </p>
           <p>
            In addition, I have practical experience creating responsive landing pages using systeme.io, working with page structure, forms, call-to-action elements, and basic UX to support user engagement and conversions.
          </p>
        </div>
      </section>
      <section id="projects">
        <h2 className="section-title">02 webdev projects</h2>
        <div className="projects-container">
          
          <div className="project">
            <Link to="/project/1">
              <h2>FANIKAUPPA</h2>
              <img src="/images/fanikauppa.png" alt="" />
            </Link>
          </div>

          <div className="project">
            <Link to="/project/2">
              <h2>Ensitietoa</h2>
              <img src="/images/ensitietoa.png" alt="" />
            </Link>
          </div>

          <div className="project">
            <Link to="/project/3">
                <h2>Gigs Info</h2>
                <img src="" alt="" />
            </Link>
          </div>

          <div className="project">
            <Link to="/project/4">
                <h2>4Langs-app</h2>
                <img src="" alt="" />
            </Link>
          </div>
          
          <div className="project">
            <Link to="/project/5">
                <h2>Alyroskis-app</h2>
                <img src="" alt="" />
            </Link>
          </div>

          <div className="project">
            <Link to="/project/6">
                <h2>Varauskalenteri</h2>
                <img src="" alt="" />
            </Link>
          </div>
         
        </div>
      </section>

      <section id="unity-projects">
        <h2 className="section-title dark-blue">03 unity projects</h2>
        <div className="projects-container">
          <div className="project">
            <a href="https://play.unity.com/en/games/d60aa3e3-4556-44dc-883f-84d131829890/avaruuden-sankari"
              ><h2>Avaruuden Sankari</h2>
              <img src="/images/avaruuden-sankari.png" alt="" />
            </a>
          </div>
          <div className="project">
          <a href="https://play.unity.com/en/games/d60aa3e3-4556-44dc-883f-84d131829890/avaruuden-sankari"
              ><h2>Avaruuden Sankari</h2>
              <img src="/images/avaruuden-sankari.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title dark-blue">04 skills</h2>
        <div className="skills">
          <div className="skill">
            <img src="/images/react.png" alt="" />
            <h2>React</h2>
          </div>
          <div className="skill">
            <img src="/images/js.png" alt="" />
            <h2>Javascript</h2>
          </div>
          <div className="skill">
            <img src="/images/html.png" alt="" />
            <h2>HTML</h2>
          </div>
          <div className="skill">
            <img src="/images/css.png" alt="" />
            <h2>CSS</h2>
          </div>
          <div className="skill">
            <img src="/images/node-js.png" alt="" />
            <h2>Node JS</h2>
          </div>
          <div className="skill">
            <img src="/images/php.png" alt="" />
            <h2>PHP</h2>
          </div>
          <div className="skill">
            <img src="/images/sql.png" alt="" />
            <h2>SQL</h2>
          </div>
          <div className="skill">
            <img src="/images/unity.png" alt="" />
            <h2>Unity</h2>
          </div>
          <div className="skill">
            <img src="/images/c-sharp.png" alt="" />
            <h2>C#</h2>
          </div>
          <div className="skill">
            <img src="/images/git.png" />
            <h2>Git</h2>
          </div>
          <div className="skill">
            <img src="/images/github.png" alt="" />
            <h2>Github</h2>
          </div>
          <div className="skill">
            <img src="/images/docker.png" alt="" />
            <h2>Docker</h2>
          </div>
        </div>
      </section>

      <section id="contacts">
        <h2 className="section-title">05 Contacts</h2>
        <p>Email: irensula19@gmail.com</p>
      </section>
    </main>
    <Footer />
    </>
    )
}

export default LandingPage;