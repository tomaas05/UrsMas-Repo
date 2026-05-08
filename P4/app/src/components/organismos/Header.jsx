import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';
import { NavItem } from '../atomos/NavItem';
import { ProfileIcon } from '../atomos/ProfileIcon';
import { LanguageIcon } from '../atomos/LanguageIcon';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {/* El logo envuelto en un Link para ir a la raíz (Escritorio) */}
      <Link to="/">
        <img 
          className={styles.logoIcon} 
          src="/logo.png" 
          alt="Logo de la marca" 
        />
      </Link>

      <nav className={styles.nav}>
        <NavItem label="Carta" to="/carta" />
        <NavItem label="Nuestros Libros" to="/libros" />
        <NavItem label="Calendario de eventos" to="/eventos" />
        <NavItem label="Foro de comentarios" to="/foro" />
      </nav>

      <div className={styles.acciones}>
        <LanguageIcon />
        <ProfileIcon />
      </div>
    </header>
  );
};
