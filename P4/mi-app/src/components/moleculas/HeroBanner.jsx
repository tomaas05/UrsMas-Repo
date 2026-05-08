import styles from './HeroBanner.module.css';

export const HeroBanner = ({ 
  imageSrc = '/qarmita.jpeg', // Tu imagen desde la carpeta public/
  altText = 'Imagen destacada de La Qarmita',
  tagline = 'Tu pausa literaria, tu sabor de siempre' 
}) => {
  return (
    <section className={styles.heroContainer}>
      <img 
        className={styles.backgroundImage} 
        src={imageSrc} 
        alt={altText} 
      />
      
      <div className={styles.overlayBox}>
        <h1 className={styles.tagline}>{tagline}</h1>
      </div>
    </section>
  );
};
