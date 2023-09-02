'use client'

import Image from 'next/image'
import Title from './Title'
import { useFetch } from '@/hooks'
import planet from '@/assets/planets.jpg'

const Planets = () => {
  const { planets } = useFetch()
  return (
    <section id="planets" className="container">
      <Title text="Planetas" id="planets" />

      <section
        className="m-1 flex h-[80vh] w-full items-center justify-between rounded-lg bg-zinc-900 p-2
        "
      >
        <section
          className="flex w-1/2 flex-col items-start justify-start
            rounded-lg
          "
        >
          {planets.map((planet) => (
            <h1
              key={planet.name}
              className="m-1 inline-block w-40 rounded-lg bg-zinc-950 p-2 text-center font-bold text-white"
            >
              {planet.name}
            </h1>
          ))}
        </section>

        <figure className="h-full w-1/2 rounded-lg">
          <Image
            src={planet}
            alt="planets"
            className="h-full w-full rounded-lg object-cover"
          />
        </figure>
      </section>
    </section>
  )
}

export default Planets
