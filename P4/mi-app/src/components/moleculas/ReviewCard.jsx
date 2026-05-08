import styles from './ReviewCard.module.css';

export const ReviewCard = ({ 
  reviewText = "Aliqua id fugiat nostrud...", 
  userName = "Van Nga", 
  userTitle = "CyberFin Co. Ltd", 
  avatarSrc = "/avatar.jpg",
  rating = 5,
  starsOutside = false 
}) => {
  // Generar array de estrellas basado en el rating
  const stars = Array.from({ length: rating }, (_, i) => i);

  const StarsContainer = () => (
    <div className={styles.stars}>
      {stars.map((star) => (
        <div key={star} className={styles.iconStar}>
          <img className={styles.vectorIcon} src="/star.svg" alt="estrella" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`${styles.reviewWrapper} ${starsOutside ? styles.outside : ''}`}>
      {!starsOutside && <StarsContainer />}
      <article className={styles.card}>
        {starsOutside && <StarsContainer />}
        <p className={styles.review}>{reviewText}</p>
        <div className={styles.user}>
          <img className={styles.avatarIcon} src={avatarSrc} alt={userName} />
          <div className={styles.userInfo}>
            <span className={styles.name}>{userName}</span>
            <span className={styles.fecha}>{userTitle}</span>
          </div>
        </div>
      </article>
    </div>
  );
};
