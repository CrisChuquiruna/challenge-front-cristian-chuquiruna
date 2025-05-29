import { useEffect, useState } from 'react'
import { useVehicleStore } from '../hooks/useVehicleStore.ts'
import { VehicleCard } from '../components/VehicleCard/VehicleCard.tsx'
import { useSelectedVehicles } from '../hooks/useSelectedVechiles.tsx'
import { Filters } from '../components/Filters/Filters.tsx'
import { FiltersState } from '../types/filters'

const Home = () => {
  const { vehicles, loading, setVehicles } = useVehicleStore()
  const { selected, toggleVehicle } = useSelectedVehicles()
    if (selected.length > 0) {
  }
  const [filters, setFilters] = useState<FiltersState>()
  console.log(filters)
  useEffect(() => {
    setVehicles()
  }, [setVehicles])

  if (loading) return <p>Cargando vehículos...</p> 

  return (
    <main className="home">
      <Filters onChange={setFilters}/>
      <section className="containerColumn gap-2">
        {vehicles.map((v) => (
          <VehicleCard 
            key={v.id} 
            vehicle={v} 
            toggleVehicle={toggleVehicle} 
            selected={selected}
            />
        ))}
      </section>
    </main>
  )
}

export default Home
