'use client'
import { FC } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
import { NobelPrize } from '@/types'

interface Props {
  data: NobelPrize[]
}

export const NumberOfLaureatesChart: FC<Props> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.awardYear),
    datasets: [
      {
        label: 'Number of Laureates',
        data: data.map((item) => item.laureates.length),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  }

  return <Line data={chartData} />
}
