
import styles from './Error.module.css';

export default function Error({errorMessage}) {

    return (
        <div id={styles.main}>
            <div className={styles.fof}>
                <h1>{errorMessage.message}</h1>
            </div>
        </div>
    );
}
