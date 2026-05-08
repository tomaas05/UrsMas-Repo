import styles from './LanguageIcon.module.css';

export const LanguageIcon = ({ 
  src = '/globe-icon.svg', // Ruta base al SVG en tu carpeta public/
  alt = 'Cambiar idioma', 
  isActive = false, 
  onClick 
}) => {
  return (
    <button 
      className={`${styles.languageButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-label={alt}
    >
      <img 
        className={styles.iconImage} 
        src={src} 
        alt={alt} 
      />
    </button>
  );
};
