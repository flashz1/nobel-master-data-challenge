import { PropsWithChildren } from 'react'

interface Props {
  title: string
}

export const Box = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-col space-y-4 m-4 p-4 bg-gray-100 rounded">
      <h3 className="text-2xl">{title}</h3>
      <div>{children}</div>
    </div>
  )
}
