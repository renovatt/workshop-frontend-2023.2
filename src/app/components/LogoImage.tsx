import Image from 'next/image'
import logo from '@/assets/logo.jpg'
import Link from 'next/link'

const LogoImage = () => {
  return (
    <Link href={'/'}>
      <figure className="h-10 w-20">
        <Image src={logo} alt="logo-star-wars" className="h-full w-full" />
      </figure>
    </Link>
  )
}

export default LogoImage
