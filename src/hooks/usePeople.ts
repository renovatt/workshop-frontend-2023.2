import { CharacterProps } from '@/@types'
import { getPeopleData } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const usePeople = () => {
  const { data, isLoading, error, isError } = useQuery<CharacterProps[]>({
    queryKey: ['people'],
    queryFn: () => getPeopleData(),
  })
  return { data, isLoading, error, isError }
}
