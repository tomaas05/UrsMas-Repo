import { BookCard } from '../moleculas/BookCard';
import styles from './BookGrid.module.css';

export const BookGrid = ({ 
  sectionTitle = "Recomendaciones", 
  books = [] 
}) => {
  return (
    <section className={styles.gridSection}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      
      <div className={styles.gridContainer}>
        {books.map((book, index) => (
          <BookCard 
            key={index}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            price={book.price}
            imageSrc={book.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};
