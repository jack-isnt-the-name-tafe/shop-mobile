const API_BASE_URL = 'http://localhost:3000/api'

export async function fetchAllCategories() {
    const response = fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories.');
    }
    return response.json();
}