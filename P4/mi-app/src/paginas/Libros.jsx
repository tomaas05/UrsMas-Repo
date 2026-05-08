import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Libros.module.css';

// Importamos nuestro sistema de componentes
import { Header } from '../components/organismos/Header';
import { Footer } from '../components/organismos/Footer';
import { SearchAndFilter } from '../components/moleculas/SearchAndFilter';
import { BookGrid } from '../components/organismos/BookGrid';

export const Libros = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Datos de ejemplo simulando una base de datos o API
  const recomendaciones = [
    { title: "Los siete maridos de Evelyn Hugo", author: "Taylor Jenkins Reid", publisher: "Umbriel Editores", price: "16.45€", imageSrc: "/los_siete_maridos.jpg" },
    { title: "Trono de Cristal", author: "Sarah J. Maas", publisher: "Hidra", price: "18.52€", imageSrc: "/trono_de_cristal.jpeg" },
    { title: "El mapa de los anhelos", author: "Alice Kellen", publisher: "Editorial Planeta", price: "17.95€", imageSrc: "/mapa_de_los_anhelos.jpg" },
  ];

  const novedades = [
    { title: "Caraval", author: "Stephanie Garber", publisher: "Puck", price: "12.11€", imageSrc: "/caraval.jpeg" },
    { title: "Una corte de rosas y espinas", author: "Sarah J. Maas", publisher: "Crossbooks", price: "14.20€", imageSrc: "/acotar.jpeg" },
    { title: "La teoría del amor", author: "Ali Hazelwood", publisher: "Contraluz", price: "19.47€", imageSrc: "/teoria_del_amor.jpg" },
  ];

  return (
    <div className={styles.pageContainer}>
      <Header onLogoClick={onLogoImageClick} />

      <main className={styles.mainContent}>
        {/* Molécula de Búsqueda y Filtros */}
        <section className={styles.searchSection}>
          <SearchAndFilter 
            searchPlaceholder="Buscar libros..." 
            onSearchChange={(value) => setSearchTerm(value)}
            onFilterClick={() => console.log("Abrir modal de filtros")}
          />
        </section>

        {/* Organismos de Rejilla de Libros */}
        <BookGrid sectionTitle="Recomendaciones del mes" books={recomendaciones} />
        <BookGrid sectionTitle="Novedades" books={novedades} />
      </main>

      <Footer />
    </div>
  );
};

export default Libros;
