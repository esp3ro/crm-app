import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../common/styles/SideBar.module.scss';
import { useState } from 'react';
console.log(styles)

const SideBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleTrigger = () => setIsOpen(!isOpen);

    return (
        <div className={styles.container}>
                <h1>CRM app</h1>
                <div>
                    {/* <FontAwesomeIcon icon="solid table-columns" /> */}
                    <h4>Dashboard</h4>
                </div>
                <div>
                    <h4>Tasks</h4>
                </div>
                <div>
                    <h4>News</h4>
                </div>
                <div>
                    <h4>Students</h4>
                </div>
                <div>
                    <h4>Contacts</h4>
                </div>
        </div>
    )
};

export default SideBar;