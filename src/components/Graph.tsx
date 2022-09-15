import React from "react";
import styles from '../common/styles/Graph.module.scss'
import { Bar } from  'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'График оплаты',
        },
    },
    scales: {
        yAxes: [{
            barPercentage: 0.5
        }]
    },
    elements: {
        rectangle: {
            borderSkipped: 'left',
        }
    }
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'April', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Студенты',
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(99,115,255)',
        },
    ],
};

const Graph = () => {
    return (
        <div className={styles.container}>
            <div>
                <h3>График</h3>
                <div className={styles.graph}>
                        <Bar options={options} data={data} width={400} height={500} />
                </div>
            </div>
        </div>
    )
}

export default Graph;