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
import { useModal } from '@/hooks'
import { LaureatesDetailsModal } from './LaureatesDetailsModal'

interface Props {
  data: NobelPrize[]
}

type AggregatedData = {
  [key: string]: AggregatedDataItem
}

type AggregatedDataItem = { count: number }

export const NumberOfLaureatesChart: FC<Props> = ({ data }) => {
  const { modalData, setModalData, modalIsOpen, setModalIsOpen, onCloseModal } =
    useModal()

  const aggregatedData: AggregatedData = data.reduce(
    (acc: AggregatedData, item) => {
      const year = item.awardYear

      if (!acc[year]) {
        acc[year] = { count: 0 }
      }

      acc[year].count += item.laureates?.length || 0

      return acc
    },
    {}
  )

  const years = Object.keys(aggregatedData)
  const laureatesCount = years.map((year) => aggregatedData[year].count)

  const onYearClick = (elementIndex: number) => {
    setModalIsOpen(true)
    setModalData(data.filter((item) => item.awardYear === years[elementIndex]))
  }

  const chartData: ChartData<'line'> = {
    labels: years,
    datasets: [
      {
        label: 'Number of Laureates',
        data: laureatesCount,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
      <Line data={chartData} options={options} />
      <LaureatesDetailsModal
        isOpen={modalIsOpen}
        close={onCloseModal}
        data={modalData}
        title="Laureates Overview"
      />
    </>
  )
}
