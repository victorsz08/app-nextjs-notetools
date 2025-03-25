"use client";

import { Menu } from "lucide-react";
import { useSidebar } from "../ui/sidebar";



export function TriggerSidebar() {
    const { toggleSidebar } = useSidebar();

    return (
        <span className="text-slate-600 cursor-pointer hover:bg-slate-200 duration-75 p-1 rounded w-fit">
            <Menu onClick={toggleSidebar} size={24} />
        </span>
    )
}