import { CharacterProps } from '@/@types'

const Card = ({ ...char }: CharacterProps) => {
  const hairColors = char.hair_color.split(',').map((color) => color.trim())
  const eyesColors = char.eye_color.split(',').map((color) => color.trim())
  const skinColors = char.skin_color.split(',').map((color) => color.trim())

  const colors: {
    [key: string]: string
  } = {
    blue: 'Azul',
    light: 'Luz',
    grey: 'Cinza',
    fair: 'Justo',
    gold: 'Ouro',
    blond: 'Loiro',
    black: 'Preto',
    white: 'Branco',
    red: 'Vermelho',
    auburn: 'Ruivo',
    brown: 'Marrom',
    none: 'Nenhuma',
    yellow: 'Amarelo',
    'n/a': 'Nenhuma',
    'blue-gray': 'Cinza azulado',
  }

  return (
    <section
      key={char.name}
      className="m-1 flex h-full w-80 flex-col items-start justify-center rounded-lg bg-zinc-900 p-2
        "
    >
      <span className="font-semibold text-white">
        Nome:
        <span className="pl-1 font-semibold text-zinc-500">{char.name}</span>
      </span>

      <span className="font-semibold text-white">
        Massa:
        <span className="pl-1 font-semibold text-zinc-500">{char.mass}</span>
      </span>

      <span className="font-semibold text-white">
        Cor do cabelo:{' '}
        {hairColors.map((color, index) => (
          <span key={index} className="pl-1 font-semibold text-zinc-500">
            {colors[color] || color}
            {index < hairColors.length - 1 ? ',' : ''}
          </span>
        ))}
      </span>

      <span className="font-semibold text-white">
        Cor da pele:
        {skinColors.map((color, index) => (
          <span key={index} className="pl-1 font-semibold text-zinc-500">
            {colors[color] || color}
            {index < skinColors.length - 1 ? ',' : ''}
          </span>
        ))}
      </span>

      <span className="font-semibold text-white">
        Cor dos olhos:
        {eyesColors.map((color, index) => (
          <span key={index} className="pl-1 font-semibold text-zinc-500">
            {colors[color] || color}
            {index < eyesColors.length - 1 ? ',' : ''}
          </span>
        ))}
      </span>

      <span className="font-semibold text-white">
        Ano de nascimento:
        <span className="pl-1 font-semibold text-zinc-500">
          {char.birth_year === 'unknown' ? 'Desconhecido' : char.birth_year}
        </span>
      </span>

      <span className="font-semibold text-white">
        Gênero:
        {char.gender === 'male' ? (
          <span className="pl-1 font-semibold text-zinc-500">Masculino</span>
        ) : char.gender === 'female' ? (
          <span className="pl-1 font-semibold text-zinc-500">Feminino</span>
        ) : (
          <span className="pl-1 font-semibold text-zinc-500">
            {char.gender === 'n/a' ? 'Nehum' : char.gender}
          </span>
        )}
      </span>
    </section>
  )
}

export default Card
