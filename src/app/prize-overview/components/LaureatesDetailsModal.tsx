import { FC } from 'react'
import { Modal } from '@/components'
import { ModalProps } from '@/components/Modal'
import { NobelPrize } from '@/types'

interface Props extends ModalProps {
  data: NobelPrize | null
}

export const LaureatesDetailsModal: FC<Props> = ({
  isOpen,
  close,
  title,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} close={close} title={title}>
      <div className="text-2xl mb-8">{`${data?.awardYear} | ${data?.category.en}`}</div>
      {data
        ? data.laureates?.map((l, index) => (
            <div key={index} className="flex flex-col pb-8 mb-8 border-b-2">
              <div>Full Name: {l.fullName?.en || '-'}</div>
              <div>Known Name: {l.knownName?.en || '-'}</div>
              <div>Motivation: {l.motivation?.en || '-'}</div>
            </div>
          ))
        : 'Loading...'}
    </Modal>
  )
}
