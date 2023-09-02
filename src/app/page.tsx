import { Fragment } from 'react'
import About from './components/About'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <Fragment>
      <About />
      <Gallery />
    </Fragment>
  )
}
