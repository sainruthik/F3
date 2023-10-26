import React from 'react'
import { Doughnut } from 'react-chartjs-2';
export default function Pie({ pieData }) {

    const data = {
        labels: ['carbs (g)', 'fat (g)', 'protein (g)'],
        datasets: [
            {
                label: 'BMR',
                data: [pieData.carbs, pieData.fat, pieData.protein],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)'
                ]
            }
        ]
    }

    const options = {
        radius: '100%',
        borderAlign: 'inner',
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Doughnut Chart'
        },

    }
    return (
        <div className='chart1'>
            <Doughnut data={data} options={options} />
        </div>
    )
}
