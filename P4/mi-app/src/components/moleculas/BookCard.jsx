import styles from './BookCard.module.css';

export const BookCard = ({ 
  title = "Título del Libro", 
  author = "Nombre del Autor", 
  publisher = "Editorial", 
  price = "0,00€", 
  imageSrc = "/book-placeholder.jpg" 
}) => {
  return (
    <article className={styles.card}>
      <img className={styles.coverImage} src={imageSrc} alt={`Portada de ${title}`} />
      
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <p className={styles.publisher}>{publisher}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </article>
  );
};
