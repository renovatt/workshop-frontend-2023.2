import { VehiclesProps } from '@/@types'
import { getVehiclesData } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useVehicles = () => {
  const { data, isLoading, error, isError } = useQuery<VehiclesProps[]>({
    queryKey: ['vehicles'],
    queryFn: () => getVehiclesData(),
  })
  return { data, isLoading, error, isError }
}
