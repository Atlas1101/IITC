import React from "react";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface RecipeCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function RecipeCard({
    id,
    title,
    description,
    image,
}: RecipeCardProps) {
    const navigate = useNavigate();

    const handleViewRecipe = () => {
        navigate(`/recipes/${id}`);
    };

    return (
        <Card className="w-64 min-w-[16rem] rounded-lg shadow-md bg-white flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                <CardDescription className="text-sm">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-32 object-cover rounded-lg"
                />
            </CardContent>
            <CardFooter>
                <button
                    onClick={handleViewRecipe}
                    className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    View Recipe
                </button>
            </CardFooter>
        </Card>
    );
}
