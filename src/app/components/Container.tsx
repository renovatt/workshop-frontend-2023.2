import { ContainerProps } from '@/@types'

const Container = ({ children }: ContainerProps) => {
  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-start">
      {children}
    </main>
  )
}

export default Container
