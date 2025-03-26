"use client";

import { Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";




export function Notifications() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-full text-slate-600 hover:bg-slate-100">
                <Bell/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[420px]" align="end">
                <DropdownMenuLabel>
                    Notificações
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <span className="text-slate-500 italic p-3 text-center">
                        Sem Notificações no momento
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 