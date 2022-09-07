import Image from 'next/image';
import styles from '../common/styles/Graph.module.scss'
import mypic from '../common/graph.png'

const Graph = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>График</h3>
                <div>
                    <Image 
                        src={mypic}
                        width="650px"
                        height="330px"
                        alt="pic"
                         />
                </div>
            </div>
        </div>
    )
}

export default Graph;