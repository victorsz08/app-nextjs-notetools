"use client";


import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel } from "../ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";


export type NavMainProps = {
    items: {
        title: string
        url: string
        icon: LucideIcon
    }[]
};

export function NavMain({ items } : NavMainProps) {
    const pathname = usePathname();

    return (
        <SidebarGroup>
        <SidebarGroupLabel>Navegação</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton 
                        tooltip={item.title}
                        isActive={pathname === item.url ? true : false}
                        className="data-[active=true]:bg-purple-700 data-[active=true]:text-white
                        text-slate-500"
                    >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    )
}