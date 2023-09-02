import Image from 'next/image'
import { Curiosity } from '@/mocks/Curiosity'
import banner from '@/assets/banner.jpg'

const About = () => {
  return (
    <section className="container flex min-h-screen flex-col items-center gap-10 bg-primary pt-40 md:flex-row md:justify-between md:pt-0">
      <figure
        data-aos="fade-right"
        className="h-96 overflow-hidden rounded-lg bg-zinc-950 md:w-1/2"
      >
        <Image
          src={banner}
          alt="about-image"
          className="h-full w-full rounded-lg object-cover shadow-2xl transition-all ease-in-out hover:scale-110
        "
        />
      </figure>
      <article
        data-aos="fade-left"
        className="flex flex-col items-start justify-start md:h-96 md:w-1/2"
      >
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
