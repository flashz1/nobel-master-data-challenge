'use client'
import { useEffect, useState } from 'react'
import { Input } from '@headlessui/react'
import { makeRequest } from '@/utils/makeRequest'
import { Box } from '@/components'
import { useDebounce, useModal } from '@/hooks'
import { Laureate } from '@/types'
import { LaureatesTable } from './LaureatesTable'
import { LaureateDetailsModal } from './LaureateDetailsModal'

interface LaureatesResponse {
  laureates: Laureate[]
}

export type SearchBy = 'name' | 'residence'

export const LaureatesUi = () => {
  const { modalData, setModalData, modalIsOpen, setModalIsOpen, onCloseModal } =
    useModal()
  const [data, setData] = useState<Laureate[]>([])
  const [searchBy, setSearchBy] = useState<SearchBy>('name')
  const [searchInput, setSearchInput] = useState('')
  const debouncedSearchInput = useDebounce(searchInput)

  const onLaureateClick = (index: number) => {
    setModalIsOpen(true)
    setModalData(data[index])
  }

  useEffect(() => {
    if (debouncedSearchInput) {
      const fetchData = async () => {
        const { data } = await makeRequest<LaureatesResponse>(
          `/laureates?${searchBy}=${searchInput}`
        )

        if (data) {
          setData(data.laureates)
        }
      }

      fetchData()
    } else {
      setData([])
    }
  }, [debouncedSearchInput])

  const onSearchByChange = (by: SearchBy) => {
    setModalData(null)
    setData([])
    setSearchBy(by)
  }

  return (
    <>
      <div className="w-full">
        <Box title="Allows the user to search for a Laureate by name or by residence">
          <div className="flex space-x-4 p-1">
            <div className="flex">
              <label className="flex space-x-1 cursor-pointer">
                <Input
                  type="radio"
                  value="name"
                  checked={searchBy === 'name'}
                  name="laureates_by"
                  onChange={(e) => onSearchByChange(e.target.value as 'name')}
                />
                <span>By Name</span>
              </label>
            </div>
            <div className="flex">
              <label className="flex space-x-1 cursor-pointer">
                <Input
                  type="radio"
                  value="residence"
                  checked={searchBy === 'residence'}
                  name="laureates_by"
                  onChange={(e) =>
                    onSearchByChange(e.target.value as 'residence')
                  }
                />
                <span>By Residence</span>
              </label>
            </div>
          </div>
          <Input
            className="w-full p-4 rounded"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Laureate e.g. 'Jeffrey'"
          />
        </Box>
      </div>
      <div className="w-full">
        <Box title="Display results in a table, showing all results">
          <LaureatesTable data={data} action={onLaureateClick} />
        </Box>
      </div>
      {modalData && (
        <LaureateDetailsModal
          isOpen={modalIsOpen}
          close={onCloseModal}
          data={modalData}
          title="Laureate Details"
        />
      )}
    </>
  )
}
