import { useEffect, useState } from "react";
import { IFilter } from "../../../../interfaces";
import { ValuesList } from "./ValuesList";

interface IProps {
  filters: IFilter[];
}

export function Filters({ filters }: IProps) {
  return (
    <aside>
      <h2>Filtros</h2>
      {filters.map(({ id, label, field }) => (
        <div key={id}>
          <h3>{label}</h3>
          <ValuesList fieldName={field} filterID={id} />
        </div>
      ))}
    </aside>
  );
}
