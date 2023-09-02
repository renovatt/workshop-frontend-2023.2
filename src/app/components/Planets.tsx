'use client'

import Title from './Title'
import Image from 'next/image'
import planet from '@/assets/planets.jpg'
import { usePlanets } from '@/hooks/usePlanets'

const Planets = () => {
  const { data, isLoading, isError } = usePlanets()
  return (
    <section id="planets" className="container pt-24">
      <Title text="Planetas" />

      <section
        className="m-1 flex h-[80vh] w-full items-center justify-between rounded-lg bg-zinc-900 p-2
        "
      >
        <section
          className="flex w-1/2 flex-col items-start justify-start
            rounded-lg
          "
        >
          {isLoading && <p>Carregando..</p>}
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

        <figure className="h-[90%] w-1/2 rounded-lg">
          <Image
            src={planet}
            alt="planets"
            className="h-full w-full rounded-lg object-cover shadow-2xl"
          />
        </figure>
      </section>
    </section>
  )
}

export default Planets
