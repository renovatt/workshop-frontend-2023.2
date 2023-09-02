'use client'

import React from 'react'
import Title from './Title'
import { useVehicles } from '@/hooks/useVehicles'
import Loading from './Loading'

const Vehicles = () => {
  const { data, isLoading, isError } = useVehicles()
  return (
    <section id="vehicles" className="container min-h-screen pt-24">
      <Title text="Veículos" />

      {isLoading && <Loading />}
      {isError && <p>error..</p>}

      <section
        data-aos="fade-up"
        className="flex flex-wrap items-center justify-between gap-2"
      >
        {data?.map((vehicle) => (
          <section
            key={vehicle.name}
            className="m-1 flex h-full w-80 flex-col items-start justify-center rounded-lg bg-zinc-900 p-2 shadow-2xl transition-all
             ease-in-out hover:bg-zinc-950
        "
          >
            <span className="font-semibold text-white">
              Nome:
              <span className="pl-1 font-semibold text-zinc-500">
                {vehicle.name}
              </span>
            </span>

            <span className="font-semibold text-white">
              Modelo:
              <span className="pl-1 font-semibold text-zinc-500">
                {vehicle.model}
              </span>
            </span>

            <span className="font-semibold text-white">
              Classe:
              <span className="pl-1 font-semibold text-zinc-500">
                {vehicle.vehicle_class}
              </span>
            </span>
          </section>
        ))}
      </section>
    </section>
  )
}

export default Vehicles
