"use client";

import { ClipboardList, House, Notebook } from "lucide-react";
import { Sidebar, SidebarHeader } from "../ui/sidebar";
import { SidebarContent } from "../ui/sidebar";
import { NavMain, NavMainProps } from "./nav-main";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { NavLink, NavLinkProps } from "./nav-links";


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
};

const dataLinks: NavLinkProps = {
  items: [
    {
        title: "Dashboard",
        url: "https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp",
        icon: House,
        target: "_blank"
    },
    {
        title: "Contratos",
        url: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_Solicitacao.asp",
        icon: ClipboardList,
        target: "_blank"
    },
    {
        title: "Notas",
        url: "https://claro.negociafacil.com.br/",
        icon: Notebook,
        target: "_blank"
    },
    {
      title: "Notas",
      url: "https://www.claro.com.br/",
      icon: Notebook,
      target: "_blank"
  },
]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    return (
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader className="flex items-center flex-row py-3">
            <Image src="icon.svg" width={26} height={26} alt="Notetools Logo"/>
            <p className="text-lg font-semibold text-slate-600 group-data-[collapsible=icon]:hidden">
                Notetools
            </p>
          </SidebarHeader>
          <Separator/>
          <SidebarContent>
            <NavMain items={data.items}/>
            <Separator/>
            <NavLink items={dataLinks.items}/>
          </SidebarContent>
        </Sidebar>
      )
}