import data from '../data/carsJSON.json'
import { CarRaw, Vehicle } from '../types/vehicle'

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const companies = Object.entries(data.cars)

  const vehicles: Vehicle[] = companies.flatMap(([company, cars]) => {
    return (cars as CarRaw[]).map((car) => {
      const firstRate = Object.values(car.rates)[0]
      const copPrice = firstRate?.pricing?.COP?.total_charge?.total?.total_amount || '0'

      return {
        id: car.code,
        company,
        name: car.name,
        category: car.features?.category || 'Otro',
        doors: Number(car.features?.doors || 0),
        luggage: Number(car.features?.large_suitcase || 0),
        seats: Number(car.features?.seats || 0),
        image: car.picture_url?.normal || '',
        price: parseFloat(copPrice),
        inclusions: Object.values(firstRate?.inclusions_meta || {}).map((v) => ({
          name: v.name,
          description: v.description
        })),
        tags: car.tags || [],
        raw: car
      }
    })
  })

  return vehicles
}
