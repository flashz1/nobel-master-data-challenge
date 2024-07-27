import Link from 'next/link'

export const Header = () => {
  return (
    <header className="py-4 mb-8">
      <div className="container">
        <Link href="/" className="text-2xl md:text-3xl">
          Nobel Master Data Challenge
        </Link>
      </div>
    </header>
  )
}
