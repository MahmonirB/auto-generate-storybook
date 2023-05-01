import styles from './Button.module.css';

export interface ButtonProps {
    label: string;
    type: 'primary' | 'secondary';
    onClick: () => void;
}

export const Button = ({ label, type, onClick }: ButtonProps) => {
    return (
        <button className={`${styles.btn} ${type === 'primary' ? styles['btn-primary'] : styles['btn-secondary']}`} onClick={onClick}>
            {label}
        </button>
    )
}
