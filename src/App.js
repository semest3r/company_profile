import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/gallery' element={<GalleryPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
