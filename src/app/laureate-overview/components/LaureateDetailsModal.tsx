import Link from 'next/link'
import { FC } from 'react'
import { Modal } from '@/components'
import { ModalProps } from '@/components/Modal'
import { Laureate } from '@/types'
import { isPerson } from '../utils/guards'

interface Props extends ModalProps {
  data: Laureate
}

export const LaureateDetailsModal: FC<Props> = ({
  isOpen,
  close,
  title,
  data,
}) => {
  const isPersonData = isPerson(data)

  return (
    <Modal isOpen={isOpen} close={close} title={title}>
      <div className="text-2xl mb-8">
        {isPersonData ? data.fullName.en : data.orgName.en}
      </div>
      <div className="flex flex-col pb-8">
        {isPersonData ? (
          <>
            <div>Full Name: {data.fullName.en}</div>
            <div>Known Name: {data.knownName.en}</div>
            <div>Birth Date: {data.birth.date}</div>
            {data?.death && <div>Death Date: {data.death.date}</div>}
          </>
        ) : (
          <>
            <div>Organization Name: {data.orgName.en}</div>
            <div>Founded Date: {data.founded.date}</div>
          </>
        )}
        <div>
          Number of prizes:{' '}
          {
            data.nobelPrizes.filter((np) => np.prizeStatus === 'received')
              .length
          }
        </div>
        <div>
          Prize details:
          {data.nobelPrizes.map((data, index) => (
            <div key={index}>
              <div>Award Year: {data.awardYear}</div>
              <div>Category: {data.categoryFullName?.en || '-'}</div>
              <div>Date Awarded: {data.dateAwarded}</div>
              <div>Prize Amount: {data.prizeAmount}</div>
              <div>Prize Amount Adjusted: {data.prizeAmountAdjusted}</div>
            </div>
          ))}
        </div>
        <div>
          Link to wikipedia page:{' '}
          <Link href={data.wikidata.url} target="_blank">
            {data.wikidata.url}
          </Link>
        </div>
      </div>
    </Modal>
  )
}
