'use client'

import Title from './Title'
import { useFetch } from '@/hooks'

const Films = () => {
  const { films } = useFetch()
  return (
    <section className="container">
      <Title text="Filmes" id="films" />

      <section className="mt-10 flex flex-wrap items-center justify-around gap-2">
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map((film) => (
            <section
              key={film.title}
              className="m-1 flex h-full w-80 flex-col items-start justify-center rounded-lg bg-zinc-900 p-2
        "
            >
              <span className="font-semibold text-white">
                Título:
                <span className="pl-1 font-semibold text-zinc-500">
                  {film.title}
                </span>
              </span>

              <span className="font-semibold text-white">
                Episódio:
                <span className="pl-1 font-semibold text-zinc-500">
                  {film.episode_id}
                </span>
              </span>

              <span className="font-semibold text-white">
                Abertura:
                <span className="pl-1 font-semibold text-zinc-500">
                  {film.opening_crawl}
                </span>
              </span>
            </section>
          ))}
      </section>
    </section>
  )
}

export default Films
