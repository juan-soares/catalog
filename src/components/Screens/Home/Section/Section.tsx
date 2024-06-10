import { Link } from "react-router-dom";

interface IProps {
  cover: string;
  title: string;
  release: string;
}

export function Section({ cover, title, release }: IProps) {
  return (
    <section>
      <h1>Titulo</h1>
      <span>L</span>
      <ul>
        <li>
          <Link to="">
            <img src={cover} />
            <h2>
              `${title} (${release.slice(0, 4)})`
            </h2>
          </Link>
        </li>
      </ul>
      <span>R</span>
    </section>
  );
}
