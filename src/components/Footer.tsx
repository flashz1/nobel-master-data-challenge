import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-4 items-center">
      <div>
        © 2024 No rights are reserved, do whatever you want with this
        information.
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="https://github.com/flashz1">github</Link>
        <Link href="https://www.linkedin.com/in/caravalerii/">linkedin</Link>
      </div>
    </footer>
  )
}
