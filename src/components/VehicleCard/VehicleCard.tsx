import { Vehicle } from '../../types/vehicle'
import IconFeatures from '../IconFeatures/IconFeatures.tsx'
import styles from './VehicleCard.module.css'
interface Props {
  vehicle: Vehicle
}
export function VehicleCard({ vehicle }: Props) {
 
  // Usar imagen principal si existe, o usar fallback
  const fallbackImage = `../../assets/cars/${vehicle.raw.features.thumb}`
  const imageUrl = vehicle.picture_url?.normal || fallbackImage
  // Extra: obtener precio en COP (usando tarifa H8 como ejemplo)
  const priceCOP = vehicle.rates?.H8?.pricing?.COP?.total_charge?.total?.total_amount
  const formattedPrice = priceCOP
    ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(Number(priceCOP))
    : 'Precio no disponible'
  
    function renderStars() {
    const stars :any= [] 
      for (let i = 0; i < 5; i++) {
        if (i < vehicle.raw.stars) {
          stars.push(<img
            src="/icons_logos/star-solid-icon.svg"
            alt=""
          ></img>)
        }else{
          stars.push(<img
            src="/icons_logos/star-outlined-icon.svg"
            alt=""
          ></img>)
        }
      }
      return stars
    } 
  console.log('vehicle', vehicle)
  return (
    <section className={styles.card}>
      <div className={styles.badge}>
        <span className="logo"><img 
          src={`/icons_logos/${vehicle.company.toLowerCase()}-logo.svg`} 
          alt={`Logo de ${vehicle.company.toLowerCase()}`}
          className={styles.logo}
        /></span>
        <span  className={styles.stars}>
          {renderStars()}          
        </span>
        <img
          src={imageUrl}
          alt={vehicle.name}
          className={styles.image}
        />
      </div>
      <div className={styles.dottedLeft}>
        <div className={styles.details}>
          <p className={styles.grupo}>GRUPO {vehicle.raw.vehicle_group} - {vehicle.raw.code}</p>
          <p className={styles.category}>{vehicle.raw.features.category}</p>
          <h2 className={styles.name}>{vehicle.name}</h2>
          <IconFeatures vehicle={vehicle} />
        </div>
      </div>

      <div className={styles.features}>

        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </section>
  )
}
