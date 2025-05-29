import { useState } from "react";
import styles from "./Filters.module.css";
import { FiltersState } from "../../types/filters";

interface FiltersProps {
  onChange: (filters: FiltersState) => void;
}

export function Filters({ onChange }: FiltersProps) {
  const [filters, setFilters] = useState<FiltersState>({
    companies: [],
    categories: [],
    luggage: [],
    passengers: [],
    priceRange: [0, 10000000],
  });

  const handleChange = (key: keyof FiltersState, value: string) => {
    setFilters((prev) => {
      const current = prev[key] as string[];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      const newState = { ...prev, [key]: updated };
      onChange(newState);
      return newState;
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    const newState = { ...filters, priceRange: [min, max] };
    setFilters(newState);
    onChange(newState);
  };

  return (
    <aside className={styles.filters}>
      <h3>Filtrar resultados</h3>

      {/* Compañías */}
      <section className={styles.checkboxGroup}>
        <div className={styles.titleSection}>
          <h4>Compañía rentadora</h4>
        </div>
        {["Avis", "Budget", "Payless"].map((company) => (
          <label key={company}>
            <input
              type="checkbox"
              checked={filters.companies.includes(company)}
              onChange={() => handleChange("companies", company)}
            />
            {company}
          </label>
        ))}
      </section>

      {/* Categorías */}
      <section className={styles.checkboxGroup}>
        <div className={styles.titleSection}>
          <h4>Categorías</h4>
        </div>
        {["SUV", "Sedán", "Económico", "Compacto", "Convertible", "Van"].map(
          (cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => handleChange("categories", cat)}
              />
              {cat}
            </label>
          )
        )}
      </section>

      {/* Maletas */}
      <section className={styles.checkboxGroup}>
        <div className={styles.titleSection}>
          <h4>Capacidad de maletas</h4>
        </div>
        {["1-2 maletas", "3-4 maletas", "5+ maletas"].map((range) => (
          <label key={range}>
            <input
              type="checkbox"
              checked={filters.luggage.includes(range)}
              onChange={() => handleChange("luggage", range)}
            />
            {range}
          </label>
        ))}
      </section>

      {/* Pasajeros */}
      <section className={styles.checkboxGroup}>
        <div className={styles.titleSection}>
          <h4>Cantidad de pasajeros</h4>
        </div>
        {["4 pasajeros", "5 pasajeros", "7+ pasajeros"].map((p) => (
          <label key={p}>
            <input
              type="checkbox"
              checked={filters.passengers.includes(p)}
              onChange={() => handleChange("passengers", p)}
            />
            {p}
          </label>
        ))}
      </section>

      {/* Precio */}
      {/* <section>
        <div className={styles.titleSection}>
          <h4>Rango de precio (COP)</h4>
        </div> */}
        {/* Aquí deberías usar una librería tipo react-slider o input tipo range */}
        {/* <input
          type="range"
          min={0}
          max={10000000}
          value={filters.priceRange[0]}
          onChange={(e) =>
            handlePriceChange(Number(e.target.value), filters.priceRange[1])
          }
        />
        <input
          type="range"
          min={0}
          max={10000000}
          value={filters.priceRange[1]}
          onChange={(e) =>
            handlePriceChange(filters.priceRange[0], Number(e.target.value))
          }
        />
        <div>
          COP {filters.priceRange[0].toLocaleString()} - COP{" "}
          {filters.priceRange[1].toLocaleString()}
        </div>
      </section> */}
    </aside>
  );
}
