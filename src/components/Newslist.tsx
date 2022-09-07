import styles from '../common/styles/Newslist.module.scss'
import NewsBlock from './NewsBlock'

const Newslist = () => {
    return (
        <div className={styles.news}>
            <h3>Лента новостей</h3>
            <div className={styles.block}>
                <NewsBlock />
                <NewsBlock />
                <NewsBlock />
                <NewsBlock />
                <NewsBlock />
            </div>
        </div>
    )
}

export default Newslist