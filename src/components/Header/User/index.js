import styles from './User.module.css'
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
    return (
        <div className={styles.head}>
            <img src="images/content/avatar.png" className={styles.avatar} width="100" height="20" />
            <ul className={styles.linklist}>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/screens/Page">
                    <li>page</li>
                </Link>
                <Link href="/faq">
                    <li>faq</li>
                </Link>
                <Link href="/about">
                    <li>about</li>
                </Link>
            </ul>
        </div>
    )
}

export default User