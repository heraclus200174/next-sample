import User from "./User";
import styles from './Header.module.css'

const Headers = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
            <User />
            </div>
        </header>
    )
}

export default Headers