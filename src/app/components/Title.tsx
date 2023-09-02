import { TitleProps } from '@/@types'

function Title({ text }: TitleProps) {
  return (
    <h1 className="mb-8 inline-block border border-transparent border-b-primary text-4xl font-bold uppercase text-white">
      {text}
    </h1>
  )
}

export default Title
