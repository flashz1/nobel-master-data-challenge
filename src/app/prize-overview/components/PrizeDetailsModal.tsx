import { FC } from 'react'
import { Modal } from '@/components'
import { ModalProps } from '@/components/Modal'
import { NobelPrize } from '@/types'

interface Props extends ModalProps {
  data: NobelPrize[] | null
}

export const PrizeDetailsModal: FC<Props> = ({
  isOpen,
  close,
  title,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} close={close} title={title}>
      <div className="max-h-[500px] overflow-y-auto">
        {data
          ? data.map((item, index) => (
              <div key={index} className="flex flex-col pb-8 mb-8 border-b-2">
                <div>Award Year: {item.awardYear}</div>
                <div>Category: {item.categoryFullName?.en || '-'}</div>
                <div>Date Awarded: {item.dateAwarded}</div>
                <div>Prize Amount: {item.prizeAmount}</div>
                <div>Prize Amount Adjusted: {item.prizeAmountAdjusted}</div>
                <div className="flex space-x-4">
                  <span>Laureates:</span>
                  {item.laureates
                    ?.map((l) => l.knownName?.en || '-')
                    .join(', ')}
                </div>
              </div>
            ))
          : 'Loading...'}
      </div>
    </Modal>
  )
}
