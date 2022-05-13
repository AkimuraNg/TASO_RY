import './App.css';
import Logo from './images/logo2.png';

import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Insta from './components/Insta/Insta';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main className="wrapper">
        {/*Introduction view*/}
        <section className="banner">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12">
                <div className="welcome">
                  {/* <h1 style={{ textTransform: 'uppercase' }} >
                    Something to say welcome here!
                  </h1> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*About view*/}
        <section className="about">
          <div className="col-12">
            <div className="titleView">
              <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                Meistä
              </h1>
            </div>
            <About />
          </div>
        </section>

        {/*Blogs and Instagram view*/}
        <section className="blogInsta mb-5" >
          <div className='col-12'>
            <div className="titleView">
              <h1 style={{ marginTop: "28px", textTransform: "uppercase" }} className="text-color">
                Blogit & Uutiset
              </h1>
              <p className="content">Katso uusimmat blogit ja uutiset <span>täältä</span></p>
            </div>
            <Blog />
          </div>

          <div className="col-12">
            <div className="titleView">
              <h1 style={{ marginTop: "100px", textTransform: "uppercase" }} className="text-color">
                Instagram
              </h1>
              <p className="content">Katso uusin Instagram-julkaisumme <span>täältä</span></p>
            </div>
            <Insta />
          </div>
        </section>
        {/*Events calendar view*/}
      </main>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
              <h1 >YHTEYSTIEDOT</h1>
              <p>Yhteyttā</p>
              <h4 style={{ marginTop: '50px' }}>Seuraa  Meistä</h4>
            </div>
            <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
              <img src={Logo} alt="Logo" className="logo mb-3" />
              <p>Tampereen Ammattikorkeakoulu</p>
            </div>
            <div className="col-md-4 text-white" style={{ textAlign: 'center' }}>
              <h1 >TIETOA TASOSTA</h1>
              <div className="row1" style={{display: 'flex'}}>
                <p style={{paddingLeft: '124px', marginRight: '50px'}}>Historiaa</p>
                <p>Tietosuja</p>
              </div>
              <p>Evāsteasetukset</p>
              <button className="btn feedback text-white" style={{marginTop: "40px"}} type="button">Palaute</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
