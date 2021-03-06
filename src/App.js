import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Styles from './pages/Styles'
import CategoryPage from './pages/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/living-room' element={<CategoryPage title="Living Room" />} />
          <Route path='/about' element={<About />} />
          <Route path='/styles' element={<Styles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
