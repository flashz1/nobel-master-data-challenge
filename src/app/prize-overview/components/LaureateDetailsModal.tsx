import { Modal } from '@/components'
import { ModalProps } from '@/components/Modal'
import { Laureate } from '@/types'

interface Props extends ModalProps {
  data: Laureate | null
}

export const LaureateDetailsModal = ({ isOpen, close, title, data }: Props) => {
  return (
    <Modal isOpen={isOpen} close={close} title={title}>
      {data ? <>test</> : 'Loading...'}
    </Modal>
  )
}
