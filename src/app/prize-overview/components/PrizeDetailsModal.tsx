import { FC } from 'react'
import { Modal } from '@/components'
import { ModalProps } from '@/components/Modal'
import { NobelPrize } from '@/types'

interface Props extends ModalProps {
  data: NobelPrize | null
}

export const PrizeDetailsModal: FC<Props> = ({
  isOpen,
  close,
  title,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} close={close} title={title}>
      {data ? (
        <>
          <div>Award Year: {data.awardYear}</div>
          <div>Category: {data.categoryFullName?.en || '-'}</div>
          <div>Date Awarded: {data.dateAwarded}</div>
          <div>Prize Amount: {data.prizeAmount}</div>
          <div>Prize Amount Adjusted: {data.prizeAmountAdjusted}</div>
          <div className="flex space-x-4">
            <span>Laureates:</span>
            {data.laureates.map((l) => l.knownName?.en || '-').join(', ')}
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </Modal>
  )
}
