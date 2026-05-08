import { useState } from 'react';
import { PrimaryButton } from '../atomos/PrimaryButton';
import styles from './CommentBox.module.css';

export const CommentBox = ({ 
  title = "Añadir comentario", 
  placeholder = "Escribe aquí tu experiencia...",
  onPublish 
}) => {
  const [comment, setComment] = useState("");

  // Determinamos si el input tiene contenido para replicar la "Variante Escrito" de Figma
  const isFilled = comment.length > 0;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      
      <textarea
        className={`${styles.textarea} ${isFilled ? styles.filled : ''}`}
        placeholder={placeholder}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className={styles.buttonWrapper}>
        <PrimaryButton 
          label="Publicar" 
          onClick={() => onPublish(comment)}
          disabled={!isFilled} 
        />
      </div>
    </section>
  );
};
