import styles from './ProfileIcon.module.css';

export const ProfileIcon = ({ 
  src = '/avatar-default.svg', // Ruta por defecto (asume que está en public/)
  alt = 'Perfil de usuario', 
  isActive = false, 
  onClick 
}) => {
  return (
    <button 
      className={`${styles.profileButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      aria-label={alt} // Accesibilidad para botones que solo contienen imágenes
    >
      <img 
        className={styles.avatarImage} 
        src={src} 
        alt={alt} 
      />
    </button>
  );
};
