import { Fragment } from 'react'
import About from './components/About'
import Gallery from './components/Gallery'
import Planets from './components/Planets'
import Films from './components/Films'
import Vehicles from './components/Vehicles'
import SessionImage from './components/SessionImage'
import redstarbird from '@/assets/redstarbird.png'
import empire from '@/assets/empire.png'
import dard from '@/assets/darth-vader.png'

export default function Home() {
  return (
    <Fragment>
      <About />
      <SessionImage img={empire} />
      <Gallery />
      <SessionImage img={redstarbird} />
      <Planets />
      <SessionImage img={dard} />
      <Films />
      <SessionImage img={empire} />
      <Vehicles />
    </Fragment>
  )
}
