import Image from 'next/image';
import Link from 'next/link';
import styles from '../common/styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                <Link href="/"><a>Главная</a></Link>
                <a>Студенты</a>
                <a>Успеваемость</a>
                <Link href="/login"><h4>Войти</h4></Link>
            </div>
        </nav>
    )
};

export default Navbar;