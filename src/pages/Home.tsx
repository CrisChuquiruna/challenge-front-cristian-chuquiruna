import { useEffect } from 'react'
import { useVehicleStore } from '../hooks/useVehicleStore.ts'
import { VehicleCard } from '../components/VehicleCard/VehicleCard.tsx'

const Home = () => {
  const { vehicles, loading, setVehicles } = useVehicleStore()

  useEffect(() => {
    setVehicles()
  }, [setVehicles])

  if (loading) return <p>Cargando vehículos...</p> 
  return (
    <main className="containerColumn home">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} />
      ))}
    </main>
  )
}

export default Home
