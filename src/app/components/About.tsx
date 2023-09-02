import Image from 'next/image'
import { Curiosity } from '@/mocks/Curiosity'
import banner from '@/assets/banner.jpg'

const About = () => {
  return (
    <section className="bg-primary container flex h-screen items-center justify-between gap-10">
      <figure className="h-96 w-1/2 rounded-lg bg-zinc-950">
        <Image
          src={banner}
          alt="about-image"
          className="h-full w-full rounded-lg object-cover
        "
        />
      </figure>
      <article className="flex h-96 w-1/2 flex-col items-start justify-start">
        <h1 className="mb-1 text-3xl font-bold text-white">
          {Curiosity.Title}
        </h1>
        <h2 className="text-xl font-bold text-white">{Curiosity.Subtitle}</h2>
        <p className="mt-2 text-base font-bold text-zinc-500">
          {Curiosity.Description}
        </p>
      </article>
    </section>
  )
}

export default About
