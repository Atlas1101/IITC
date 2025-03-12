export default async function fetchRecipeById(id: number | string) {
    try {
        const response = await fetch(`http://localhost:5000/recipes/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch recipe with id ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
