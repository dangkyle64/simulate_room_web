import { fetchRestData } from "../lib/restapi";

export async function getServerSideProps() {
    
    const data = await fetchRestData();
  
    return {
      props: { data }, 
    };
};

export default function Home() {

    console.log('The data:', data);

    return (
        <div>
            <h1>Data from Rest Backend</h1>
            {/* Render the message */}
            <p>{data.message}</p>
        </div>
    );
};