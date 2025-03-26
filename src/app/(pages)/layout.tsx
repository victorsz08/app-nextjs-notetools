import { Bread } from "@/components/breadcrumb/breadcrumb";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Notifications } from "@/components/sidebar/notifications";
import { ProfileMenu } from "@/components/sidebar/profile-menu";
import { TriggerSidebar } from "@/components/sidebar/trigger-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarHeader, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";


const settings = {
    fullName: "Victor Siqueira",
    username: "victorsz08",
    imageUrl: "https://github.com/victorsz08.png"
}


export default function Layout({ children } : { children: React.ReactNode }) {

    return (
        <SidebarProvider>
            <AppSidebar variant="sidebar"/>
            <SidebarInset>
                <SidebarHeader className="bg-white py-4 px-3 flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center flex-row gap-2">
                        <TriggerSidebar/>
                        <Separator orientation="vertical" className="h-full"/>
                        <Bread/>
                    </div>
                    <div className="flex items-center flex-row gap-2">
                        <Notifications/>
                        <ProfileMenu settings={settings}/>
                    </div>
                </SidebarHeader>
                <Separator/>
                <main className="w-full">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}