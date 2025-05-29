import data from '../data/carsJSON.json'
import { Vehicle, Tag } from '../types/vehicle'

interface CarRaw {
  code: string
  name: string
  features?: {
    category?: string
    doors?: string
    seats?: string
    large_suitcase?: number | string
  }
  picture_url?: {
    normal?: string
  }
  rates: Record<string, any>
  tags: Tag[]
  [key: string]: any // para campos extra que se guardan en raw
}

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  const companies = Object.entries(data.cars)

  const vehicles: Vehicle[] = companies.flatMap(([company, cars]) => {
    return (cars as CarRaw[]).map((car) => {
      const firstRate = Object.values(car.rates)?.[0]
      const copPriceRaw = firstRate?.pricing?.COP?.total_charge?.total?.total_amount
      const usdPriceRaw = firstRate?.pricing?.USD?.total_charge?.total?.total_amount

      const copPrice = copPriceRaw ? parseFloat(copPriceRaw) : 0
      const usdPrice = usdPriceRaw ? parseFloat(usdPriceRaw) : 0

      return {
        id: car.code,
        company,
        name: car.name,
        category: car.features?.category || 'Otro',
        doors: Number(car.features?.doors || 0),
        luggage: Number(car.features?.large_suitcase || 0),
        seats: Number(car.features?.seats || 0),
        image: car.picture_url?.normal || '',
        price: {
          COP: copPrice,
          USD: usdPrice
        },
        inclusions: Object.values(firstRate?.inclusions_meta || {}).map((inclusion: any) => ({
          name: inclusion.name,
          description: inclusion.description
        })),
        tags: car.tags || [],
        raw: car
      }
    })
  })

  return vehicles
}
