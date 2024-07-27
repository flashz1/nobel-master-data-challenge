import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <div className="flex min-h-screen flex-col md:flex-row items-center md:justify-between p-24 space-y-4">
        <div className="flex w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px] border rounded-full justify-center items-center">
          <Link
            href={'/prize-overview'}
            className="text-2xl lg:text-5xl text-center"
          >
            Prize Overview
          </Link>
        </div>
        <div className="flex w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px] border rounded-full justify-center items-center">
          <Link
            href={'/laureate-overview'}
            className="text-2xl lg:text-5xl text-center"
          >
            Laureate Overview
          </Link>
        </div>
      </div>
    </div>
  )
}
