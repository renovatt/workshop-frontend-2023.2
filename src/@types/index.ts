import { ReactNode } from 'react'

export type CharacterProps = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  // species: any[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type PlanetsProps = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: string[]
  films: string[]
  created: string
  edited: string
  url: string
}

export type VehiclesProps = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  // pilots: any[]
  films: string[]
  created: string
  edited: string
  url: string
}

export type FilmsProps = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}

export type RouterLinksProps = {
  text: string
  href: string
  onClick?: () => void
}

export type ContainerProps = {
  children: ReactNode
}

export type ReactQueryProviderProps = {
  children: ReactNode
}

export type TitleProps = {
  text: string
}
