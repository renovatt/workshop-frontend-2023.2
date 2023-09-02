'use client'

import Title from './Title'
import Image from 'next/image'
import planet from '@/assets/planets.jpg'
import { usePlanets } from '@/hooks/usePlanets'
import Loading from './Loading'

const Planets = () => {
  const { data, isLoading, isError } = usePlanets()
  return (
    <section id="planets" className="container pt-24">
      <Title text="Planetas" />

      <section
        data-aos="fade-up"
        className="m-1 flex w-full flex-col-reverse items-center justify-between overflow-hidden rounded-lg bg-zinc-900 p-2 md:h-[80vh] md:flex-row
        "
      >
        <section
          data-aos="fade-right"
          className="m-2 flex flex-wrap items-center justify-center rounded-lg md:m-0 md:w-1/2 md:flex-col md:items-start
            md:justify-start
          "
        >
          {isLoading && <Loading />}
          {isError && <p>error..</p>}

          {data?.map((planet) => (
            <h1
              key={planet.name}
              className="m-1 inline-block w-40 rounded-lg bg-zinc-950 p-2 text-center
              font-bold text-white transition-all ease-in-out hover:bg-white hover:text-zinc-900"
            >
              {planet.name}
            </h1>
          ))}
        </section>

        <figure
          data-aos="fade-left"
          className="h-[90%] overflow-hidden rounded-lg md:w-1/2"
        >
          <Image
            src={planet}
            alt="planets"
            className="h-full w-full rounded-lg object-cover shadow-2xl transition-all ease-in-out hover:scale-110"
          />
        </figure>
      </section>
    </section>
  )
}

export default Planets
