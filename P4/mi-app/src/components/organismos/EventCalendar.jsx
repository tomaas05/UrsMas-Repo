import styles from './EventCalendar.module.css';

export const EventCalendar = ({ 
  month = "Mayo", 
  year = "2026",
  eventDays = [9, 10, 11, 12, 13], // Días destacados
  startDayOfWeek = 5 // 0 = Domingo, 5 = Viernes (Mayo 2026 empieza en viernes)
}) => {
  const daysOfWeek = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']; // Traducido al español
  
  // Generamos arrays vacíos para rellenar los huecos y los días del mes (31 días para mayo)
  const blanks = Array.from({ length: startDayOfWeek }, (_, i) => i);
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <article className={styles.calendarContainer}>
      
      {/* Controles del mes y año */}
      <header className={styles.calendarHeader}>
        <button className={styles.iconButton} aria-label="Mes anterior">❮</button>
        
        <div className={styles.selectors}>
          <div className={styles.select}>{month} <span>▼</span></div>
          <div className={styles.select}>{year} <span>▼</span></div>
        </div>
        
        <button className={styles.iconButton} aria-label="Mes siguiente">❯</button>
      </header>

      {/* Cuadrícula del Calendario */}
      <div className={styles.table}>
        {/* Días de la semana */}
        <div className={styles.thead}>
          {daysOfWeek.map(day => (
            <div key={day} className={styles.dayName}>{day}</div>
          ))}
        </div>

        {/* Números de los días generados con CSS Grid */}
        <div className={styles.tbody}>
          {blanks.map(blank => (
            <div key={`blank-${blank}`} className={styles.emptyDay} />
          ))}
          
          {daysInMonth.map(day => {
            const isEvent = eventDays.includes(day);
            return (
              <button 
                key={day} 
                className={`${styles.dayButton} ${isEvent ? styles.eventDay : ''}`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
};
