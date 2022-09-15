import Image from 'next/image';
import Link from 'next/link';
import styles from '../common/styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
                <Link href="/login"><button>Выйти</button></Link>
        </nav>
    )
};

export default Navbar;