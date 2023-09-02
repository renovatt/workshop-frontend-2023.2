'use client'

import { useFetch } from '@/hooks'
import React from 'react'
import Title from './Title'

const Vehicles = () => {
  const { vehicles } = useFetch()
  return (
    <section className="container">
      <Title text="Veículos" id="vehicles" />

      <section className="mt-10 flex flex-wrap items-center justify-around gap-2">
        {vehicles.map((vehicle) => (
          <section
            key={vehicle.name}
            className="m-1 flex h-full w-80 flex-col items-start justify-center rounded-lg bg-zinc-900 p-2
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
