import { useState, useEffect } from "react";

export default function useFetchRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("http://localhost:5000/recipes");
                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    return { recipes, loading, error };
}
