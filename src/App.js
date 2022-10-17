import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import AppHome from './comps/appHome';
import About from './comps/about';
import Gallery from './comps/gallery';

function App() {
  return (
    <BrowserRouter>
      <header className='border p-2'>
        <h2>header</h2>
      </header>
      <Routes>
        <Route index element={<AppHome/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/*" element={
          <div className='container-fluid'>
            <div className='container mx-auto'>
              <h1 className='text-danger display-2'>
                Page Not Found, 404
             </h1>
            </div>
          </div>
        }/>
      </Routes>
      <footer>
        <h3>footer</h3>
      </footer>
    </BrowserRouter>

  );
}

export default App;
