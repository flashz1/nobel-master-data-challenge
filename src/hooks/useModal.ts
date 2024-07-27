import { useState } from 'react'

export const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalData, setModalData] = useState<any>(null)

  const onCloseModal = () => {
    setModalData(null)
    setModalIsOpen(false)
  }

  return {
    modalIsOpen,
    setModalIsOpen,
    modalData,
    setModalData,
    onCloseModal,
  }
}
