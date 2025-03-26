"use client";

import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { UserAvatar } from "./user-avatar";
import { LogOut, Settings, User } from "lucide-react";


export type ProfileSettingsProps = {
    settings: {
        fullName: string;
        username: string;
        imageUrl: string;
    }
}

export function ProfileMenu({ settings } : ProfileSettingsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <UserAvatar image={settings.imageUrl} name={settings.fullName}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[250px]" align="end">
                <DropdownMenuLabel>
                    <div className="flex flex-col">
                        <p className="text-xs font-semibold text-slate-600">{settings.fullName}</p>
                        <small className="text-xs font-light text-slate-400">@{settings.username}</small>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className="text-xs font-light text-slate-500">
                    <Link href="/perfil" className="flex flex-row items-center gap-1">
                        <User size={14}/>
                        <span>Perfil</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-xs font-light text-slate-500">
                    <Link href="/configuracoes" className="flex flex-row items-center gap-1">
                        <Settings size={14}/>
                        <span>Configurações</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem 
                    className="bg-red-200 text-red-600 font-light text-xs cursor-pointer 
                    hover:bg-red-400 flex flex-row items-center gap-1">
                        <LogOut size={14} className="text-red-600"/>
                        <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}