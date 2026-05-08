import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Eventos.module.css';

// Importamos nuestro sistema atómico
import { Header } from '../components/organismos/Header';
import { Footer } from '../components/organismos/Footer';
import { HeroBanner } from '../components/moleculas/HeroBanner';
import { EventCalendar } from '../components/organismos/EventCalendar';

export const Eventos = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.pageContainer}>
      <Header onLogoClick={onLogoImageClick} />

      <main className={styles.mainContent}>
        
        {/* Usamos el Banner. Al pasar HTML en el tagline, logramos el salto de línea */}
        <HeroBanner 
          tagline={
            <>
              Próximo Show Flamenco <br/> 
              <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>9/05/26</span>
            </>
          }
          imageSrc="/show_flamenco.jpg" /* Recuerda poner esta imagen en public/ */
        />

        <section className={styles.calendarSection}>
          <EventCalendar 
            month="Mayo" 
            year="2026" 
            eventDays={[9, 10, 11, 12, 13]} // ¡Le pasamos los días mágicamente!
            startDayOfWeek={5} 
          />
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Eventos;
