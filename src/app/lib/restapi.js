export async function fetchRestData() {
    try {
        const response = await fetch('https://simulate-room-nodejs.onrender.com/api/hello');

         // Log the response status to debug issues
        console.log('Response Status:', response.status);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the data for troubleshooting
        return data;

    } catch (error) {
        console.error('Fetch error:', error);
        return { message: 'Fallback data' };

    };
};