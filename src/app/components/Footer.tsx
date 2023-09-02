import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="flex h-20 items-center justify-around border-t border-primary">
      <section className="flex">
        <span className="m-1 text-xs font-bold text-white md:text-base">
          &copy; {currentYear} willcode | Powered by
        </span>
        <Link
          className="flex items-center text-xs font-bold text-white hover:text-black md:text-base"
          href="https://www.linkedin.com/in/renovatt"
          target="_blank"
        >
          renovatt
        </Link>
      </section>

      <section className="flex items-center justify-around gap-4">
        <Link
          className="flex items-center text-white"
          href="https://www.linkedin.com/in/renovatt"
          target="_blank"
        >
          <FaLinkedin className="h-6 w-6 text-white transition-all ease-in hover:text-black" />
        </Link>

        <Link
          className="flex items-center text-white"
          href="https://github.com/renovatt"
          target="_blank"
        >
          <FaGithub className="h-6 w-6 text-white transition-all ease-in hover:text-black" />
        </Link>
      </section>
    </footer>
  )
}

export default Footer
