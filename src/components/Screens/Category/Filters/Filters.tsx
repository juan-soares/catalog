import { ValuesList } from "./ValuesList";

interface IProps {
  filters: [{ id: string; filter: string }];
}

export function Filters({ filters }: IProps) {
  return (
    <aside>
      <h2>Filtros</h2>
      {filters.map(({ id, filter }) => (
        <div key={id}>
          <h3>{filter}</h3>
          <ValuesList filterID={id} />
        </div>
      ))}
    </aside>
  );
}
