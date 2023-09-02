import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export type SessionImageProps = {
  img: StaticImport
}

const SessionImage = ({ img }: SessionImageProps) => {
  return (
    <section className="flex h-60 w-full items-center justify-center bg-zinc-900">
      <figure className="h-40 w-40">
        <Image
          src={img}
          alt="image"
          className="h-full
         w-full object-cover shadow-lg"
        />
      </figure>
    </section>
  )
}

export default SessionImage
