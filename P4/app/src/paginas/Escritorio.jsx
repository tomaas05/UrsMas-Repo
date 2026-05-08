import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Escritorio.module.css';

// Importación de nuestro Sistema de Diseño (Atomic Design)
import { Header } from '../components/organismos/Header';
import { Footer } from '../components/organismos/Footer';
import { HeroBanner } from '../components/moleculas/HeroBanner';
import { TextBlock } from '../components/moleculas/TextBlock';
import { PromoCard } from '../components/moleculas/PromoCard';

export const Escritorio = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.pageContainer}>
      {/* 1. ORGANISMO: Cabecera */}
      <Header onLogoClick={onLogoImageClick} />

      {/* Todo el contenido principal va en una etiqueta semántica */}
      <main className={styles.mainContent}>
        
        {/* 2. MOLÉCULA: Banner Principal */}
        <HeroBanner 
          tagline="Tu pausa literaria, tu sabor de siempre" 
          imageSrc="/qarmita.jpeg" 
        />

        {/* 3. MOLÉCULA: Bloque de Texto */}
        <div className={styles.textSection}>
          <TextBlock 
            title="Nuestro refugio cultural" 
            text="La Qarmita es un refugio diseñado para quienes buscan pausar el ritmo frenético de la ciudad. Somos una cafetería de especialidad y librería independiente en el corazón de Granada, donde cada taza acompaña una historia y cada libro abre un debate en nuestra comunidad"
            align="center"
          />
        </div>

        {/* 4. SECCIÓN ORQUESTADORA DE MOLÉCULAS: Tarjetas de Promoción */}
        <section className={styles.promoSection}>
          <PromoCard 
            title="La Promo de la Semana"
            subtitle="Nuestro Café con Caramelo y Sal"
            description="Deliciosa fusión de café de especialidad y caramelo artesano, realzada con un toque de sal rosa"
            price="4,50€"
            imageSrc="/cafe-sal.jpg" /* Asume que tienes esta imagen en /public */
          />
          
          <PromoCard 
            title="Recomendación literaria"
            subtitle="Una novela única para este mes"
            description="Trepidante historia de supervivencia donde el sacrificio y la rebelión se entrelazan en una lucha por la libertad"
            price="18,90€" /* Precio de ejemplo */
            imageSrc="/juegos_del_hambre.jpeg" /* Asume que tienes esta imagen en /public */
            hasShadow={true} /* Usamos la prop de sombra que definimos en la refactorización */
          />
        </section>

      </main>

      {/* 5. ORGANISMO: Pie de Página */}
      <Footer />
    </div>
  );
};

export default Escritorio;
