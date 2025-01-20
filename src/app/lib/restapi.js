export async function fetchRestData() {
    try {
        const response = await fetch('http://localhost:5000/api/hello');

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();

    } catch (error) {
        console.error('Fetch error:', error);
        return { message: 'Fallback data' };

    };
};