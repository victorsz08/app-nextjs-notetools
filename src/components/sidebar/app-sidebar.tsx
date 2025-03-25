"use client";

import { ClipboardList, House, Notebook } from "lucide-react";
import { Sidebar } from "../ui/sidebar";
import { SidebarContent } from "../ui/sidebar";
import { NavMain, NavMainProps } from "./nav-main";


const data: NavMainProps = {
    items: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: House
        },
        {
            title: "Contratos",
            url: "/contratos",
            icon: ClipboardList
        },
        {
            title: "Notas",
            url: "/notas",
            icon: Notebook
        }
    ]
} 

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    return (
        <Sidebar collapsible="icon" {...props}>
          
          <SidebarContent>
            <NavMain items={data.items}/>
          </SidebarContent>
        </Sidebar>
      )
}