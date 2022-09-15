import React from "react";
import styles from '../common/styles/Graph.module.scss'
import { Line } from  'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Sales/ month",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
        },
    ],
};


const Graph = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>График</h3>
                <div className={styles.graph}>
                    <div className={styles.bar}>
                        <Line data={data} width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph;