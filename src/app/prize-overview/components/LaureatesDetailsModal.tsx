import { FC } from 'react'
import { Modal } from '@/components'
import { ModalProps } from '@/components/Modal'
import { NobelPrize } from '@/types'

interface Props extends ModalProps {
  data: NobelPrize[] | null
}

export const LaureatesDetailsModal: FC<Props> = ({
  isOpen,
  close,
  title,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} close={close} title={title}>
      <div className="text-2xl mb-8">{`${data?.[0].awardYear}`}</div>
      <div className="max-h-[500px] overflow-y-auto">
        {data
          ? data.map((nobelPrize) =>
              nobelPrize.laureates?.map((l, index) => (
                <div key={index} className="flex flex-col pb-8 mb-8 border-b-2">
                  <div>Category: {nobelPrize.category.en}</div>
                  <div>Full Name: {l.fullName?.en || '-'}</div>
                  <div>Known Name: {l.knownName?.en || '-'}</div>
                  <div>Motivation: {l.motivation?.en || '-'}</div>
                </div>
              ))
            )
          : 'Loading...'}
      </div>
    </Modal>
  )
}
