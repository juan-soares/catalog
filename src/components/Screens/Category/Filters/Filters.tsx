import { useEffect, useState } from "react";
import { IFilter } from "../../../../interfaces";
import { getData } from "../../../../utils";

interface IProps {
  filters: IFilter[];
}

export function Filters({ filters }: IProps) {
  return (
    <aside>
      {filters.map(({ id, label }) => (
        <div key={id}>
          <h3>{label}</h3>
          <ul>
            <li>
              <label></label>
              <input type="checkbox" />
            </li>
          </ul>
        </div>
      ))}
    </aside>
  );
}
