import './App.css';
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'

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
                    Tervetuloa
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
      </main>
    </div>
  );
}

export default App;
