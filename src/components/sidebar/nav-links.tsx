"use client";


import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupLabel } from "../ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";


export type NavLinkProps = {
    items: {
        title: string
        url: string
        icon: LucideIcon,
        target?: React.HTMLAttributeAnchorTarget
    }[]
};

export function NavLink({ items } : NavLinkProps) {
    const pathname = usePathname();

    return (
        <SidebarGroup>
        <SidebarGroupLabel>Links</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <Link href={item.url} target={item.target}>
                    <SidebarMenuButton 
                          tooltip={item.title}
                          isActive={pathname === item.url ? true : false}
                          className="data-[active=true]:bg-purple-700 data-[active=true]:text-white
                          text-slate-500 cursor-pointer py-5 tracking-tight"
                      >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    )
}