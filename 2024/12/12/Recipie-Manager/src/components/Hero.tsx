interface HeroProps {
    title: string;
    description: string;
    backgroundImage: string;
    containerClassName?: string; // For outer container customization
    titleClassName?: string; // For title customization
    descriptionClassName?: string; // For description customization
}

function Hero({
    title,
    description,
    backgroundImage,
    containerClassName = "",
    titleClassName = "",
    descriptionClassName = "",
}: HeroProps) {
    return (
        <section
            className={`relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center text-white ${containerClassName}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className={`text-4xl font-bold mb-4 ${titleClassName}`}>
                    {title}
                </h1>
                <p className={`text-lg ${descriptionClassName}`}>
                    {description}
                </p>
            </div>
        </section>
    );
}

export default Hero;
