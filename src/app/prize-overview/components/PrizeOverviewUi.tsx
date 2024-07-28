'use client'
import { useEffect, useState } from 'react'
import { Select } from '@headlessui/react'
import { makeRequest } from '@/utils/makeRequest'
import {
  AdjustedAwardAmountChart,
  AwardsByCategoryChart,
  NumberOfLaureatesChart,
} from '.'
import { NobelPrize } from '@/types'
import { Box } from '@/components/Box'

interface NobelPrizesResponse {
  nobelPrizes: NobelPrize[]
}

const YEARS = Array.from({ length: 2024 - 1901 + 1 }, (v, i) => i + 1901)

export const PrizeOverviewUi = () => {
  const [data, setData] = useState<NobelPrize[]>([])
  const [prizeYear, setPrizeYear] = useState('')
  const [yearTo, setYearTo] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await makeRequest<NobelPrizesResponse>(
        `/nobelPrizes?nobelPrizeYear=${prizeYear}&yearTo=${yearTo}`
      )

      if (data) {
        setData(data.nobelPrizes)
      }
    }

    if (prizeYear && yearTo) {
      fetchData()
    }
  }, [prizeYear, yearTo])

  return (
    <>
      <div className="flex items-center space-x-4">
        <span>Filter by a year range:</span>
        <Select
          className="appearance-none rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 *:text-black"
          onChange={(e) => setPrizeYear(e.target.value)}
        >
          <option value="">Select Prize Year</option>
          {YEARS.map((y, index) => (
            <option key={index} value={y}>
              {y}
            </option>
          ))}
        </Select>
        <span>-</span>
        <Select
          className="appearance-none rounded-lg border bg-white/5 py-1.5 px-3 text-sm/6 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 *:text-black"
          onChange={(e) => setYearTo(e.target.value)}
        >
          <option value="">Select Year To</option>
          {YEARS.map((y, index) => (
            <option key={index} value={y}>
              {y}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between p-12">
        <div className="w-full md:w-1/2">
          <Box title="Adjusted award amount of award over the years as time series">
            {data.length ? (
              <AdjustedAwardAmountChart data={data || []} />
            ) : (
              'No data.'
            )}
          </Box>
        </div>
        <div className="w-full md:w-1/2">
          <Box title="Number of laureates over the years as time series">
            {data.length ? (
              <NumberOfLaureatesChart data={data || []} />
            ) : (
              'No data.'
            )}
          </Box>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Box title="Number of awards by category as a pie chart">
            {data.length ? (
              <AwardsByCategoryChart data={data || []} />
            ) : (
              'No data.'
            )}
          </Box>
        </div>
      </div>
    </>
  )
}
