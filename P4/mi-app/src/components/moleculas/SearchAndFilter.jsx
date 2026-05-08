import styles from './SearchAndFilter.module.css';

export const SearchAndFilter = ({ 
  searchPlaceholder = "Buscar libros...",
  onSearchChange,
  onFilterClick
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon} aria-hidden="true">🔍</span>
        <input 
          type="search" 
          className={styles.searchInput} 
          placeholder={searchPlaceholder}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          aria-label={searchPlaceholder}
        />
      </div>

      <button className={styles.filterChip} onClick={onFilterClick}>
        <span className={styles.chipText}>Filtros</span>
      </button>
    </div>
  );
};
