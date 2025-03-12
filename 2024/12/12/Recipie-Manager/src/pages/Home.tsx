import Hero from "@/components/Hero";
import homeHero from "@/assets/homeHero.jpg";
import RecipeCarousel from "@/components/RecipeCarousel";
export default function Home() {
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {/* Hero Section */}
            <div className="w-full h-auto">
                <Hero
                    title="Welcome to Recipe Manager"
                    description="Manage, explore, and organize your favorite recipes effortlessly."
                    backgroundImage={homeHero}
                />
            </div>

            {/* RecipeCarousel Section */}
            <div className="w-full h-auto">
                <RecipeCarousel />
            </div>
        </div>
    );
}
