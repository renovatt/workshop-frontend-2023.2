'use client'

import Card from './Card'
import Title from './Title'
import { usePeople } from '@/hooks/usePeople'

const Gallery = () => {
  const { data, isLoading, isError } = usePeople()
  return (
    <section id="gallery" className="container pt-24">
      <Title text="Galeria" />

      {isLoading && <p>Carregando..</p>}
      {isError && <p>error..</p>}
      <section className="flex min-h-screen flex-wrap items-center justify-around gap-10">
        {data?.map((char) => <Card key={char.name} {...char} />)}
      </section>
    </section>
  )
}

export default Gallery
