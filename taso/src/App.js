import './App.css';
import Navbar from './components/NavBar/Navbar'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <main className='wrapper'>
        <section className="banner">
          <div className="container h-100 w-100">
            <div className="row h-100">
                <div className="welcome">
                  <h1>Tervetuloa</h1>
                </div>
            </div>
          </div>
        </section>
        {/* <section className="about">
          <About />
        </section> */}
      </main>
    </div>
  );
}

export default App;
