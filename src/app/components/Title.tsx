import { TitleProps } from '@/@types'

function Title({ text, id }: TitleProps) {
  return (
    <h1
      id={id}
      className="mb-8 inline-block border border-transparent border-b-white text-4xl font-bold uppercase text-white"
    >
      {text}
    </h1>
  )
}

export default Title
