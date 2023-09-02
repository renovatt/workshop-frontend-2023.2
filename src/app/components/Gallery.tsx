'use client'

import Card from './Card'
import { useFetch } from '@/hooks'
import Title from './Title'

const Gallery = () => {
  const { people } = useFetch()
  return (
    <section className="bg-gradient-center container bg-zinc-900">
      <Title text="Galeria" id="gallery" />

      <section className="mt-10 flex flex-wrap items-center justify-around gap-10">
        {people.map((char) => (
          <Card key={char.name} {...char} />
        ))}
      </section>
    </section>
  )
}

export default Gallery
