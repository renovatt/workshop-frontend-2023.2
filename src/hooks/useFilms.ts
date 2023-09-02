import { FilmsProps } from '@/@types'
import { getFilmsData } from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useFilms = () => {
  const { data, isLoading, error, isError } = useQuery<FilmsProps[]>({
    queryKey: ['films'],
    queryFn: () => getFilmsData(),
  })
  return { data, isLoading, error, isError }
}
