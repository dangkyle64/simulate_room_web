import { fetchRestData } from "../lib/restapi";

export default async function Home() {

    const data = await fetchRestData();
    console.log('The data:', data);
    return (
        <div>
            <h1>Data from Rest Backend</h1>
            {/* Render the message */}
            <p>{data.message}</p>
        </div>
    );
};