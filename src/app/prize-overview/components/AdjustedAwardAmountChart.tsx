'use client'
import { FC } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { NobelPrize } from '@/types'
import { useModal } from '@/hooks'
import { PrizeDetailsModal } from './PrizeDetailsModal'

Chart.register(
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

type AggregatedData = {
  [key: string]: AggregatedDataItem
}

type AggregatedDataItem = { totalPrizeAmount: number; count: number }

export const AdjustedAwardAmountChart: FC<Props> = ({ data }) => {
  const { modalData, setModalData, modalIsOpen, setModalIsOpen, onCloseModal } =
    useModal()

  const aggregatedData: AggregatedData = data.reduce(
    (acc: AggregatedData, item) => {
      const year = item.awardYear

      if (!acc[year]) {
        acc[year] = { totalPrizeAmount: 0, count: 0 }
      }

      acc[year].totalPrizeAmount += item.prizeAmountAdjusted
      acc[year].count += 1

      return acc
    },
    {}
  )

  const years = Object.keys(aggregatedData)
  const prizeAmounts = years.map(
    (year) => aggregatedData[year].totalPrizeAmount / aggregatedData[year].count
  )

  const onYearClick = (elementIndex: number) => {
    setModalIsOpen(true)
    setModalData(data.filter((item) => item.awardYear === years[elementIndex]))
  }

  const chartData: ChartData<'line'> = {
    labels: years,
    datasets: [
      {
        label: 'Adjusted Award Amount Chart',
        data: prizeAmounts,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    onClick: (event: any, elements: any) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index
        onYearClick(elementIndex)
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  }

  return (
    <>
      <Line data={chartData} options={options} className="w-full" />
      <PrizeDetailsModal
        isOpen={modalIsOpen}
        close={onCloseModal}
        data={modalData}
        title="Prize Details"
      />
    </>
  )
}
