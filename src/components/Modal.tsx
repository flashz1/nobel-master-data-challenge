import { FC, PropsWithChildren } from 'react'
import { CloseButton, Dialog, DialogPanel, Transition } from '@headlessui/react'

export interface ModalProps {
  isOpen: boolean
  close: () => void
  title: string
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  close,
  children,
  title,
}) => {
  return (
    <>
      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-300 ease-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog onClose={close} className="relative z-50 transition">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="flex flex-col relative w-full h-full md:h-auto md:min-h-[60%] max-w-[890px] bg-white p-8 md:p-12 rounded-5xl overflow-hidden">
              <CloseButton className="absolute top-6 right-6 z-30">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25.0001C45.8333 13.4941 36.5059 4.16675 25 4.16675C13.494 4.16675 4.16663 13.4941 4.16663 25.0001C4.16663 36.506 13.494 45.8334 25 45.8334Z"
                    fill="#F6F7F9"
                  />
                  <path
                    d="M27.2083 25L32 20.2083C32.6042 19.6042 32.6042 18.6042 32 18C31.3958 17.3958 30.3958 17.3958 29.7917 18L25 22.7917L20.2083 18C19.6042 17.3958 18.6042 17.3958 18 18C17.3958 18.6042 17.3958 19.6042 18 20.2083L22.7917 25L18 29.7917C17.3958 30.3958 17.3958 31.3958 18 32C18.3125 32.3125 18.7083 32.4583 19.1042 32.4583C19.5 32.4583 19.8958 32.3125 20.2083 32L25 27.2083L29.7917 32C30.1042 32.3125 30.5 32.4583 30.8958 32.4583C31.2917 32.4583 31.6875 32.3125 32 32C32.6042 31.3958 32.6042 30.3958 32 29.7917L27.2083 25Z"
                    fill="#333333"
                  />
                </svg>
              </CloseButton>
              <h4 className="font-bold text-2xl mb-8">{title}</h4>
              <div className="flex flex-col w-full h-full z-20">{children}</div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
