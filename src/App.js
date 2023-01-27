import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Book';
import { Navbar } from './components/Nav';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
