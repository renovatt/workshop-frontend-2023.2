import Link from 'next/link'
import { RouterLinksProps } from '@/@types'

const RouterLinks = ({ href, text, onClick }: RouterLinksProps) => {
  return (
    <Link
      className={`${
        onClick ? 'text-2xl text-white' : 'text-base text-zinc-800'
      } font-bold transition-all ease-in hover:text-white`}
      href={href}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default RouterLinks
