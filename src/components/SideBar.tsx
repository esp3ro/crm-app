import React from 'react';
import styles from 'common/styles/SideBar.module.scss';
import { useState } from 'react';
import { Icon } from './Icon/Icon';

const SideBar = () => {


    return (
        <div className={styles.container}>
                <div>
                        <h1>CRM app</h1>
                                <div className={styles.content}>
                                    <ul>
                                        <li>
                                            {/* <Students /> */}
                                            <Icon name="students"/>
                                            <a href="#">Студенты</a>
                                        </li>
                                        <li>
                                            {/* <Tasks /> */}
                                            <Icon name="tasks"/>
                                            <a href="#">Задачи</a>
                                        </li>
                                        <li>
                                            {/* <News /> */}
                                            <Icon name="news"/>
                                            <a href="#">Новости</a>
                                        </li>
                                        <li>
                                            {/* <Grades /> */}
                                            <Icon name="grades"/>
                                            <a href="#">Успеваемость</a>
                                        </li>
                                        <li>
                                            {/* <Contacts /> */}
                                            <Icon name="contacts"/>
                                            <a href="#">Контакты</a>
                                        </li>
                                    </ul>
                                </div>

                </div>
        </div>
    )
};

export default SideBar;