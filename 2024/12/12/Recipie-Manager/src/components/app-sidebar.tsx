import { Calendar, Home, Utensils, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from React Router

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items with React Router paths
const items = [
    {
        title: "Home",
        url: "/", // Use proper routes
        icon: Home,
    },
    {
        title: "Recipes",
        url: "/recipes",
        icon: Utensils,
    },
    {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "/search",
        icon: Search,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        {/* Use Link for routing */}
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
