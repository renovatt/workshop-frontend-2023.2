import { PlanetsProps } from '@/@types'
import { getPlanetsData } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const usePlanets = () => {
  const { data, isLoading, error, isError } = useQuery<PlanetsProps[]>({
    queryKey: ['planets'],
    queryFn: () => getPlanetsData(),
  })
  return { data, isLoading, error, isError }
}
