import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Escritorio from './paginas/Escritorio';
import Libros from './paginas/Libros';
import Eventos from './paginas/Eventos';
import Foro from './paginas/Foro'; // IMPORTA EL FORO

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Escritorio />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/foro" element={<Foro />} /> {/* AÑADE LA RUTA */}
      </Routes>
    </Router>
  );
}

export default App;
