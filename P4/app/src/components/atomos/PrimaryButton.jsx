import styles from './PrimaryButton.module.css';

export const PrimaryButton = ({ 
  label = 'Pide ahora', 
  onClick, 
  type = 'button',
  disabled = false
}) => {
  return (
    <button 
      className={styles.primaryButton}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
