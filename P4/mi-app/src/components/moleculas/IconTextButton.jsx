import styles from './IconTextButton.module.css';

export const IconTextButton = ({ 
  label = 'Contáctanos', 
  iconSrc = '/mail-icon.svg', // Asumimos que el SVG está en public/
  altText = 'Icono de correo',
  isActive = false, 
  onClick 
}) => {
  return (
    <button 
      className={`${styles.buttonContainer} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <img 
        className={styles.icon} 
        src={iconSrc} 
        alt={altText} 
      />
      <span className={styles.label}>{label}</span>
    </button>
  );
};
