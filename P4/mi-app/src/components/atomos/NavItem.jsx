import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

export const NavItem = ({ label, to = "/" }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `${styles.navItem} ${isActive ? styles.active : ''}`
      }
    >
      {label}
    </NavLink>
  );
};
