import { useState } from 'react';
import styles from './Foro.module.css';

// Importamos nuestro sistema atómico
import { Header } from '../components/organismos/Header';
import { Footer } from '../components/organismos/Footer';
import { CommentBox } from '../components/moleculas/CommentBox';
import { ReviewCard } from '../components/moleculas/ReviewCard';

// Datos iniciales extraídos de tu diseño
const comentariosIniciales = [
  {
    id: 1,
    userName: "Elena M.",
    userTitle: "30/04/26 - 19:33",
    reviewText: "El café con caramelo y sal es una maravilla. Me encanta venir aquí a leer los domingos por la tarde, el ambiente es súper tranquilo y la selección de libros independientes es brutal.",
    rating: 5,
    avatarSrc: "/elenam.png" // Asegúrate de tener algunos avatares de prueba en /public
  },
  {
    id: 2,
    userName: "Javier Ruiz",
    userTitle: "28/04/26 - 18:21",
    reviewText: "Fui a mi primer club de lectura la semana pasada y ya estoy deseando que sea el siguiente. Es genial tener un espacio así en Granada donde debatir tranquilamente.",
    rating: 5,
    avatarSrc: "/javier-ruiz.png"
  },
  {
    id: 3,
    userName: "Sofía L.",
    userTitle: "28/04/26 - 13:21",
    reviewText: "Mi refugio favorito en la ciudad. El concepto de ocio lento se nota nada más cruzar la puerta. La música siempre está al volumen perfecto y sus tartas caseras son el mejor premio.",
    rating: 5,
    avatarSrc: "/sofial.jpg"
  },
  {
    id: 4,
    userName: "Marta Sánchez",
    userTitle: "21/04/26 - 16:34",
    reviewText: "Para mí es fundamental encontrar espacios que me transmitan paz y no me generen ansiedad. La Qarmita se ha convertido en mi lugar seguro en Granada para estudiar Historia o relajarme con mis amigas.",
    rating: 4,
    avatarSrc: "/marta-sanchez.png"
  }
];

export const Foro = () => {
  const [comentarios, setComentarios] = useState(comentariosIniciales);

  // Función mágica: Recibe el texto de CommentBox y lo añade a la cuadrícula
  const handlePublishReview = (nuevoTexto) => {
    const nuevoComentario = {
      id: Date.now(), // Generamos un ID único temporal
      userName: "Tú (Usuario Invitado)",
      userTitle: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }), // Fecha actual real
      reviewText: nuevoTexto,
      rating: 5,
      avatarSrc: "/avatar-default.svg" // Usamos tu icono por defecto
    };

    // Añadimos el nuevo comentario al principio del array
    setComentarios([nuevoComentario, ...comentarios]);
  };

  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        
        {/* Sección de Introducción y Caja de Comentarios */}
        <section className={styles.heroSection}>
          <CommentBox 
            title="Añadir comentario"
            placeholder="Escribe aquí tu experiencia..."
            onPublish={handlePublishReview} // Conectamos la caja con nuestra función
          />
        </section>

        {/* Cuadrícula dinámica de Reseñas */}
        <section className={styles.reviewsSection}>
          <div className={styles.reviewsGrid}>
            {comentarios.map((comentario) => (
              <ReviewCard 
                key={comentario.id}
                userName={comentario.userName}
                userTitle={comentario.userTitle}
                reviewText={comentario.reviewText}
                rating={comentario.rating}
                avatarSrc={comentario.avatarSrc}
                starsOutside={true} // El diseño original de Figma las tenía por fuera
              />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Foro;
