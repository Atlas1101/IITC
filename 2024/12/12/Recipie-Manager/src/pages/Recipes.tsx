import { useState } from "react";
import RecipeCard from "@/components/RecipeCard.tsx";
import useFetchRecipes from "@/utils/useFetchRecipes";
import Hero from "@/components/Hero";
import recipeHero from "@/assets/recipeHero.jpg";
export default function Recipes() {
    const [search, setSearch] = useState("");
    const { recipes, loading, error } = useFetchRecipes();

    if (loading) return <div>Loading recipes...</div>;
    if (error) return <div>Error: {error}</div>;

    // Filter recipes based on search input
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Hero
                title="Whats Cooking?"
                description="Discover delicious recipes from around the world."
                backgroundImage={recipeHero}
                titleClassName="text-6xl"
            />

            <div className="max-w-screen-xl mx-auto p-4">
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                    />
                </div>

                {/* Recipes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <RecipeCard
                                id={recipe.id}
                                title={recipe.title}
                                description={recipe.category}
                                image={recipe.image}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500">No recipes found.</p>
                    )}
                </div>
            </div>
        </>
    );
}
