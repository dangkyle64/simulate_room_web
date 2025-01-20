export async function fetchRestData() {
    const response = await fetch('http://localhost:5000/api/hello');

    if(!response.ok) {
        throw new Error('Failed to fetch data');
    };

    return response.json();
};