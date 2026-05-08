import styles from './Footer.module.css';

// Importamos nuestra Molécula multiusos
import { IconTextButton } from '../moleculas/IconTextButton';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Reemplazamos los divs estáticos por nuestra Molécula parametrizada */}
      <IconTextButton 
        label="Contáctanos" 
        iconSrc="/mail-icon.svg" 
        altText="Icono de correo electrónico" 
      />
      
      <IconTextButton 
        label="Dónde encontrarnos" 
        iconSrc="/location-icon.svg" 
        altText="Icono de ubicación en el mapa" 
      />
    </footer>
  );
};
