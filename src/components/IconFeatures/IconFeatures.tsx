import styles from './IconFeatures.module.css'
// import passengersIcon from '../../assets/icons_logos/passengers-icon.svg';
// import doorsIcon from '../../assets/icons_logos/doors-icon.svg';
// import transmissionIcon from '../../assets/icons_logos/transmission-icon.svg';
// import carryIcon from '../../assets/icons_logos/carry-icon.svg';
// import luggageIcon from '../../assets/icons_logos/luggage-icon.svg';
// import airConditioningIcon from '../../assets/icons_logos/air-conditioning-icon.svg';

export default function IconFeatures({vehicle}: any) {

  const svgIcons = {
    seats: '/icons_logos/passengers-icon.svg',
    doors: '/icons_logos/doors-icon.svg',
    trasmissionType: '/icons_logos/transmission-icon.svg',
    smallSuitcase: '/icons_logos/carry-icon.svg',
    bigSuitcase: '/icons_logos/luggage-icon.svg',
    airConditioning: '/icons_logos/air-conditioning-icon.svg',
  };  
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={svgIcons.seats} alt='Pasageros'/>
        <span>{vehicle.raw.features.seats}</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={svgIcons.doors} alt="Puertas" />
        <span>{vehicle.raw.features.doors}</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={svgIcons.trasmissionType} alt="Transmisión" />
        <span>{vehicle.raw.transmission_type[0]}</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={svgIcons.smallSuitcase} alt="Maletas pequeñas" />
        <span>{vehicle.raw.features.small_suitcase}</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={svgIcons.bigSuitcase} alt="Maletas grandes" />
        <span>{vehicle.raw.features.large_suitcase}</span>
      </div>
      <div className={styles.iconContainer}>
        <img src={svgIcons.airConditioning} alt="Aire acondicionado" />
        <span>{
          vehicle.raw.features.air_conditioner ? 'SI' : 'NO'
       }</span>
      </div>
    </div>
  )
}
