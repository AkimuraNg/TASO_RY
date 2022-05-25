import './App.css';

import Home from './components/Home';
import HomeEng from './components/HomeEng'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blog_Page/Blogs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Eng" element={<HomeEng />}></Route>
          <Route path="/Blogs/:pageNumber" element={<Blogs/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
