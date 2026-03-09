import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Validator from './pages/Validator';
import Register from './pages/Register';
import Validation from './pages/Validation';

function App() {
  return (
    <BrowserRouter basename="/tickets">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/validator" element={<Validator />} />
          <Route path="/register" element={<Register />} />
          <Route path="/validacion" element={<Validation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
