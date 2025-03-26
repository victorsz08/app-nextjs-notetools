"use client";

import { ClipboardList, Globe, House, Notebook, ShieldCheck, UserRoundCheck, WalletMinimal } from "lucide-react";
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
        title: "Situação CPF",
        url: "https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp",
        icon: UserRoundCheck,
        target: "_blank"
    },
    {
        title: "Situação CNPJ",
        url: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_Solicitacao.asp",
        icon: ShieldCheck,
        target: "_blank"
    },
    {
        title: "Negocia Fácil Claro",
        url: "https://claro.negociafacil.com.br/",
        icon: WalletMinimal,
        target: "_blank"
    },
    {
      title: "Site Oficial da Claro",
      url: "https://www.claro.com.br/",
      icon: Globe,
      target: "_blank"
  },
]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

    return (
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader className="flex items-center flex-row py-4">
            <Image src="icon.svg" width={26} height={26} alt="Notetools Logo"/>
            <p className="text-lg font-semibold tracking-tight text-slate-600 group-data-[collapsible=icon]:hidden">
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