import { create } from 'zustand'
import { Vehicle } from '../types/vehicle'
import { fetchVehicles } from '../api/vehicles.ts'
import { v4 as uuidv4 } from 'uuid'

interface VehicleWithId extends Vehicle {
  id: string
}

interface VehicleStore {
  vehicles: VehicleWithId[]
  selected: VehicleWithId[]
  loading: boolean
  setVehicles: () => Promise<void>
  toggleVehicle: (v: VehicleWithId) => void
}

export const useVehicleStore = create<VehicleStore>((set, get) => ({
  vehicles: [],
  selected: [],
  loading: false,

  setVehicles: async () => {
    set({ loading: true })
    const data = await fetchVehicles()
    const withIds = data.map((v: Vehicle) => ({
      ...v,
      id: uuidv4(),
    }))
    set({ vehicles: withIds, loading: false })
  },

  toggleVehicle: (v) => {
    const selected = get().selected
    const exists = selected.find((item) => item.id === v.id)

    if (exists) {
      set({ selected: selected.filter((item) => item.id !== v.id) })
    } else if (selected.length < 5) {
      set({ selected: [...selected, v] })
    }
  },
}))
