'use client'
import { FC } from 'react'
import { Pie } from 'react-chartjs-2'
import {
  ArcElement,
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { NobelPrize } from '@/types'

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Props {
  data: NobelPrize[]
}

export const AwardsByCategoryChart: FC<Props> = ({ data }) => {
  const categories = data.reduce((acc: any, item) => {
    acc[item.category.en] = (acc[item.category.en] || 0) + 1
    return acc
  }, {})

  const chartData = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#d4af37',
          '#FF9F40',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  }

  return <Pie data={chartData} className="w-full" />
}
