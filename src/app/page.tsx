import { Fragment } from 'react'
import About from './components/About'
import Gallery from './components/Gallery'
import Planets from './components/Planets'
import Films from './components/Films'
import Vehicles from './components/Vehicles'

export default function Home() {
  return (
    <Fragment>
      <About />
      <Gallery />
      <Planets />
      <Films />
      <Vehicles />
    </Fragment>
  )
}
