import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Profile from "./pages/Profile";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import "./App.css";

function App() {
    return (
        <SidebarProvider>
            <Router>
                <AppSidebar />
                <main className="flex-1 bg-white overflow-y-auto">
                    <SidebarTrigger />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route
                            path="/recipes/:id"
                            element={<RecipeDetails />}
                        />
                        <Route path="/profile" element={<Profile />} />
                        <Route
                            path="*"
                            element={<h1>404 - Page Not Found</h1>}
                        />
                    </Routes>
                </main>
            </Router>
        </SidebarProvider>
    );
}

export default App;
