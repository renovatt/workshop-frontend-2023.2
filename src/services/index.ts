const PEOPLE_URL = 'https://swapi.dev/api/people/'
const PLANETS_URL = 'https://swapi.dev/api/planets/'
const VEHICLES_URL = 'https://swapi.dev/api/vehicles/'
const FILMS_URL = 'https://swapi.dev/api/films/'

export const getPeopleData = async () => {
  const res = await fetch(PEOPLE_URL)
  const json = await res.json()
  return json.results
}

export const getPlanetsData = async () => {
  const res = await fetch(PLANETS_URL)
  const json = await res.json()
  return json.results
}

export const getVehiclesData = async () => {
  const res = await fetch(VEHICLES_URL)
  const json = await res.json()
  return json.results
}

export const getFilmsData = async () => {
  const res = await fetch(FILMS_URL)
  const json = await res.json()
  return json.results
}
