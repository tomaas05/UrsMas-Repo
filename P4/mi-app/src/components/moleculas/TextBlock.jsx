import styles from './TextBlock.module.css';

export const TextBlock = ({ 
  title = "Título de la sección", 
  text = "Escribe aquí el contenido de la sección...", 
  align = "left" // 'left' o 'center'
}) => {
  return (
    <section className={`${styles.container} ${styles[align]}`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {text && <p className={styles.text}>{text}</p>}
    </section>
  );
};
