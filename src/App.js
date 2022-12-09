import './App.css';
import Navbar from './components/navbar.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentFirst from './components/first_part.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/about.js';
import Mypro from './components/mypro.js';
import BottomFooter from './components/footer.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ContentFirst />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/myproject' element={<Mypro />}></Route>
        </Routes>
        <BottomFooter />
      </div>
    </Router>
  );
}

export default App;
