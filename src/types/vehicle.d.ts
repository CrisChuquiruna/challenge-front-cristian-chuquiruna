export interface Vehicle {
  id: string
  company: string
  name: string
  category: string
  doors: number
  luggage: number
  seats: number
  image: string
  price: {
    COP: number
    USD: number
  }
  inclusions: {
    name: string
    description: string
  }[]
  tags: Tag[]
  raw: any // o podrías usar el tipo original completo del `car` si lo tienes tipado
}

export interface Tag {
  id: number
  name_filter: string
  visible: boolean
  name: string
  icon: string
  color: string
  remote_url: string | null
  placeholder: string
  priority: number
}
