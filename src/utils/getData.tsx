export default async function getData(
  url: string,
  setData: (arg: any) => void
) {
  const res = await fetch(
    `https://catalog-1kpk--3001--12d46890.local-credentialless.webcontainer.io/${url}`
  );
  const data = await res.json();
  setData(data);
}
