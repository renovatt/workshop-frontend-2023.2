import { CharacterProps, PlanetsProps } from '@/@types'
import { getPeopleData, getPlanetsData } from '@/services'
import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [people, setPeople] = useState<CharacterProps[]>([])
  const [planets, setPlanets] = useState<PlanetsProps[]>([])

  const handlePeopleDataFetch = async () => {
    const data = await getPeopleData()
    setPeople(data)
  }

  const handlePlanetsDataFetch = async () => {
    const data = await getPlanetsData()
    setPlanets(data)
  }

  useEffect(() => {
    handlePeopleDataFetch()
    handlePlanetsDataFetch()
  }, [])

  return {
    people,
    planets,
  }
}
