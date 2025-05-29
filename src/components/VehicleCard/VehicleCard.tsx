
import { Vehicle } from "../../types/vehicle";
import IconFeatures from "../IconFeatures/IconFeatures.tsx";
import styles from "./VehicleCard.module.css";

interface Props {
  vehicle: Vehicle;
  toggleVehicle: (vehicle: Vehicle) => void;
  key: string;
  selected: Array<Vehicle>;
}
export function VehicleCard({ vehicle, toggleVehicle, selected }: Props) {
  const imgVehicle = convertToLocalCarImageUrl(vehicle.image);

  function formatNumber(number: number): string {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  }

  function renderStars() {
    const stars: any = [];
    for (let i = 0; i < 5; i++) {
      if (i < vehicle.raw.stars) {
        stars.push(<img src="/icons_logos/star-solid-icon.svg" alt=""></img>);
      } else {
        stars.push(
          <img src="/icons_logos/star-outlined-icon.svg" alt=""></img>
        );
      }
    }
    return stars;
  }

  function convertToLocalCarImageUrl(remoteUrl: string): string {
    if (!remoteUrl) {
      return vehicle.raw.picture_url.normal;
    }
    const fileName = remoteUrl.split("/").pop();
    return fileName ? `/cars/${fileName}` : "";
  }
  
  

  return (
    <section className={styles.card}>
      <span className={styles.lineaAzul}></span>
      <div className={styles.badge}>
        <span className="logo">
          <img
            src={`/icons_logos/${vehicle.company.toLowerCase()}-logo.svg`}
            alt={`Logo de ${vehicle.company.toLowerCase()}`}
            className={styles.logo}
          />
        </span>
        <span className={styles.stars}>{renderStars()}</span>
        <img src={imgVehicle} alt={vehicle.name} className={styles.image} />
        <span className={styles.destacado}>
          {<img src="/icons_logos/featured-icon.svg" alt="featured icon"></img>}
          Destacado
        </span>
      </div>
      <div className={styles.dottedRight}>
        <div className={styles.details}>
          <p className={styles.grupo}>
            GRUPO {vehicle.raw.vehicle_group} - {vehicle.raw.code}
          </p>
          <p className={styles.category}>{vehicle.raw.features.category}</p>
          <h2 className={styles.name}>{vehicle.raw.name_details}</h2>
          <IconFeatures vehicle={vehicle} />
        </div>
        <div className={styles.cotizado}>
          {selected.some((v) => v?.id === vehicle?.id) ? (
            <>
              <img src='/icons_logos/check-logo.svg' alt='icon'></img>
              <span className={styles.cotizadoText}>Vehículo agregado a su cotización {selected.findIndex((v) => v?.id === vehicle?.id) + 1} de 5</span>
            </> )
          : <>
            <img src='/icons_logos/carta.svg' alt='icon'></img>
            <span className={styles.noCotizadoText}>Seleccionar este vehículo para cotizar</span>
            </>
          }
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature_title}>
          <h2>Inclusive Light <img src='/icons_logos/info-icon.svg' alt='' /></h2>
          <span>Precio por 3 dias de renta</span>
        </div>
        <div className={styles.feature_price}>
          <p className={styles.priceCOP}>
            <span>COP</span> {formatNumber(vehicle.price.COP)}
          </p>
          <p className={styles.priceUSD}>
            (USD {formatNumber(vehicle.price.USD)})
          </p>
          <button 
            className={styles.btnSeleccionar}   
            onClick={() => {
              toggleVehicle(vehicle);
            }}
          >Seleccionar</button>
        </div>
      </div>
    </section>
  );
}
