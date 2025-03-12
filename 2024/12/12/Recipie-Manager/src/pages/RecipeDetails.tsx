import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRecipeById from "@/utils/fetchRecipeDetails";
import Hero from "@/components/Hero";

interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    ingredients: string[];
    instructions: string[];
}

export default function RecipeDetails() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRecipe = async () => {
            try {
                const data = await fetchRecipeById(id!); // Use the utility function
                setRecipe(data);
            } catch (err: any) {
                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        getRecipe();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!recipe) return <p>Recipe not found</p>;

    return (
        <>
            <Hero
                title={recipe.title}
                description={`${recipe.category}`}
                backgroundImage={recipe.image}
                titleClassName="text-6xl"
            />
            <section className="p-6 bg-gray-50 rounded-lg shadow-md mx-auto max-w-4xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Ingredients
                    </h2>
                    <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li
                                key={index}
                                className="hover:text-gray-900 transition"
                            >
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                        Instructions
                    </h2>
                    <ol className="list-decimal pl-6 text-lg text-gray-700 space-y-4">
                        {recipe.instructions.map((instruction, index) => (
                            <li
                                key={index}
                                className="hover:text-gray-900 transition"
                            >
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}
