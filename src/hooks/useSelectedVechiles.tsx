import { useState } from 'react'
import { Vehicle } from '../types/vehicle'

const MAX_VEHICLES = 5

export function useSelectedVehicles() {
  const [selected, setSelected] = useState<Vehicle[]>([])

  const toggleVehicle = (vehicle: Vehicle) => {
    setSelected((prev) => {
      const exists = prev.find((v) => v.id === vehicle.id)

      if (exists) {
        return prev.filter((v) => v.id !== vehicle.id)
      }

      if (prev.length >= MAX_VEHICLES) {
        return prev
      }

      return [...prev, vehicle]
    })
  }

  return { selected, toggleVehicle }
}
