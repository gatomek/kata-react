import styles from './Modal.module.css';

type ModalProps = {
    onCloseFunction: () => void;
}

export function Modal({onCloseFunction} : Readonly<ModalProps>) {
    return (
        <div className={styles.modal}>
            <h2>Modal View!</h2>
            <button className={styles.button}
                    onClick={() => onCloseFunction()}>
                Hide!
            </button>
        </div>
    )
}