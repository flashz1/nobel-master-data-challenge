import { FC } from 'react'
import { Laureate } from '@/types'
import { isPerson } from '../utils/guards'

interface Props {
  data: Laureate[]
  action: (index: number) => void
}

export const LaureatesTable: FC<Props> = ({ data, action }) => (
  <table className="w-full table-auto text-left">
    <thead>
      <tr>
        <th>Laureate Name (person or organization)</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {data && data.length ? (
        data.map((item, index) => (
          <tr key={item.id}>
            <td>{isPerson(item) ? item.fullName.en : item.orgName.en}</td>
            <td className="cursor-pointer" onClick={() => action(index)}>
              View Details
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={2}>No data.</td>
        </tr>
      )}
    </tbody>
  </table>
)
