'use client'

import Loading from './Loading'
import Title from './Title'
import { useFilms } from '@/hooks/useFilms'

const Films = () => {
  const { data, isLoading, isError } = useFilms()
  return (
    <section id="films" className="container min-h-screen pt-24">
      <Title text="Filmes" />

      {isLoading && <Loading />}
      {isError && <p>error..</p>}

      <section
        data-aos="fade-up"
        className="flex flex-wrap items-center justify-around gap-2 "
      >
        {data
          ?.sort((a, b) => a.episode_id - b.episode_id)
          ?.map((film) => (
            <section
              data-aos="fade-up"
              key={film.title}
              className="m-1 flex h-full w-80 flex-col items-start justify-center rounded-lg bg-zinc-900 p-2 shadow-2xl transition-all
              ease-in-out hover:bg-zinc-950
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
