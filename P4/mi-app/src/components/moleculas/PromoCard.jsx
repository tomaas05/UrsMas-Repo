import { PrimaryButton } from '../atomos/PrimaryButton';
import styles from './PromoCard.module.css';

export const PromoCard = ({ 
  title = "La Promo de la Semana",
  subtitle = "Nuestro Café con Caramelo y Sal",
  description = "Deliciosa fusión de café de especialidad y caramelo artesano, realzada con un toque de sal rosa",
  price = "4,50€",
  imageSrc = "/cafe-promo.jpg",
  onOrderClick,
  hasShadow = false
}) => {
  return (
    <article className={`${styles.cardContainer} ${hasShadow ? styles.withShadow : ''}`}>
      <img className={styles.image} src={imageSrc} alt={subtitle} />
      
      <div className={styles.content}>
        <h3 className={styles.promoTag}>{title}</h3>
        <h2 className={styles.productTitle}>{subtitle}</h2>
        <p className={styles.description}>
          {description}<br />
          <strong>Precio: {price}</strong>
        </p>
        
        <PrimaryButton label="Pide ahora" onClick={onOrderClick} />
      </div>
    </article>
  );
};
