import { useState } from "react";

interface IProps {
  setSelectedCategory: (arg: string) => void;
}

export function NewAnime({ setSelectedCategory }: IProps) {
  const [newAnime, setNewAnime] = useState({
    title: "",
    titleTranslated: "",
    cover: "",
    release: "",
  });

  function handleChange({ target: { id, value, files } }) {
    setNewAnime({ ...newAnime, [id]: files ? files[0].name : value });
    console.log(newAnime);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch(
      "https://catalog-1kpk--3001--a0590ceb.local-credentialless.webcontainer.io/animes",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnime),
      }
    );

    res.status !== 201 && window.alert("Falha!");

    window.alert("Salvo!");
    setSelectedCategory("");
  }

  return (
    <div>
      <h1>Novo An.</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Título: </label>
        <input
          id="title"
          type="text"
          required
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="titleTranslated">Título Traduzido: </label>
        <input
          id="titleTranslated"
          type="text"
          onChange={(e) => handleChange(e)}
        />

        <label>Capa: </label>
        <input
          id="cover"
          type="file"
          required
          onChange={(e) => handleChange(e)}
        />

        <label>Lançamento: </label>
        <input
          id="release"
          type="date"
          required
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">ENVIAR</button>
        <button onClick={() => setSelectedCategory("")}>CANCELAR</button>
      </form>
    </div>
  );
}
