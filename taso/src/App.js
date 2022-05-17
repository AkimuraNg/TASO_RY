import './App.css';

import Home from './components/Home';
import HomeEng from './components/HomeEng'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/eng" element={<HomeEng />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
