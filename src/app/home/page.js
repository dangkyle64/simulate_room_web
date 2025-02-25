import { fetchRestData } from "../lib/restapi";

export default async function Home() {
  const data = await fetchRestData(); 

  return (
    <div>
      <h1>Data from Rest Backend</h1>
      <p>{data.message}</p>
    </div>
  );
}
