import Navbar from './Navbar'
import LogoImage from './LogoImage'

const Header = () => {
  return (
    <header className="fixed left-0 top-0 flex h-20 w-full items-center justify-between bg-white px-4 py-2">
      <LogoImage />
      <Navbar />
    </header>
  )
}

export default Header
