import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="mt-8 inline-block text-blue-500 underline">
                Go back to Home
            </Link>
        </div>
    );
}
