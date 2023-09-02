import {
  CharacterProps,
  PlanetsProps,
  VehiclesProps,
  FilmsProps,
} from '@/@types'
import {
  getPeopleData,
  getPlanetsData,
  getFilmsData,
  getVehiclesData,
} from '@/services'
import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [people, setPeople] = useState<CharacterProps[]>([])
  const [planets, setPlanets] = useState<PlanetsProps[]>([])
  const [vehicles, setVechicles] = useState<VehiclesProps[]>([])
  const [films, setFilms] = useState<FilmsProps[]>([])

  const handlePeopleDataFetch = async () => {
    const data = await getPeopleData()
    setPeople(data)
  }

  const handlePlanetsDataFetch = async () => {
    const data = await getPlanetsData()
    setPlanets(data)
  }

  const handleVehiclesDataFetch = async () => {
    const data = await getVehiclesData()
    setVechicles(data)
  }

  const handleFilmsDataFetch = async () => {
    const data = await getFilmsData()
    setFilms(data)
  }

  useEffect(() => {
    handlePeopleDataFetch()
    handlePlanetsDataFetch()
    handleVehiclesDataFetch()
    handleFilmsDataFetch()
  }, [])

  return {
    people,
    planets,
    vehicles,
    films,
  }
}
