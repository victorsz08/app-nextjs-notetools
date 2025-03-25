import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { TriggerSidebar } from "@/components/sidebar/trigger-sidebar";
import { SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";




export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <SidebarProvider>
            <AppSidebar variant="sidebar"/>
            <SidebarInset>
                <SidebarHeader className="bg-white">
                    <TriggerSidebar/>
                </SidebarHeader>
                <main className="w-full">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}