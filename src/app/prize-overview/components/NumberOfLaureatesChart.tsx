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

export const NumberOfLaureatesChart: FC<Props> = ({ data }) => {
  const { modalData, setModalData, modalIsOpen, setModalIsOpen, onCloseModal } =
    useModal()

  const onYearClick = (elementIndex: number) => {
    setModalIsOpen(true)
    setModalData(data[elementIndex])
  }

  const chartData: ChartData<'line'> = {
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
