import { makeRequest } from '@/utils/makeRequest'
import {
  AdjustedAwardAmountChart,
  AwardsByCategoryChart,
  NumberOfLaureatesChart,
} from './components'
import { NobelPrize } from '@/types'
import { Box } from '@/components/Box'

interface NobelPrizesResponse {
  nobelPrizes: NobelPrize[]
}

async function getData() {
  const { error, data } = await makeRequest<NobelPrizesResponse>(
    '/nobelPrizes?yearTo=2024&offset=600&limit=50'
  )

  if (error) {
    throw new Error('Failed to fetch data')
  }

  return data
}

export default async function PrizeOverviewPage() {
  const data = await getData()

  return (
    <div className="container">
      <h2 className="text-4xl">Prize Overview</h2>
      <div className="flex min-h-screen flex-col md:flex-row flex-wrap items-center justify-between p-12">
        <div className="w-full md:w-1/2">
          <Box title="Adjusted award amount of award over the years as time series">
            <AdjustedAwardAmountChart data={data?.nobelPrizes || []} />
          </Box>
        </div>
        <div className="w-full md:w-1/2">
          <Box title="Number of laureates over the years as time series">
            <NumberOfLaureatesChart data={data?.nobelPrizes || []} />
          </Box>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Box title="Number of awards by category as a pie chart">
            <AwardsByCategoryChart data={data?.nobelPrizes || []} />
          </Box>
        </div>
      </div>
    </div>
  )
}
