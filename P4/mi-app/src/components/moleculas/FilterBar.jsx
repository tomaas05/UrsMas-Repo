import styles from './FilterBar.module.css';

export const FilterBar = ({ 
  categories = ['Todos', 'Café de Especialidad', 'Bebidas y Refrescos', 'Dulces', 'Salados'],
  activeCategory = 'Todos',
  onCategorySelect 
}) => {
  return (
    <nav className={styles.filterContainer} aria-label="Filtros de menú">
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategorySelect && onCategorySelect(category)}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};
