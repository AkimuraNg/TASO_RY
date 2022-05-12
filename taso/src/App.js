import './App.css';
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
                  <h1 style={{ textTransform: 'uppercase' }} >
                    Something to say welcome here!
                  </h1>
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
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <h1 className="text-white">This is the footer</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
