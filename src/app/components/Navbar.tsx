import RouterLinks from './RouterLinks'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouterLinks href="/" text="Início" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#gallery" text="Galeria" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#planets" text="Planetas" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="#vehicles" text="Veículos" />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
