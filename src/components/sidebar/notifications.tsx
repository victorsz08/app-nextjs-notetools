"use client";

import { Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { CardNotifications } from "../notifications/card-notifications";


export type NotificationsProps = {
    notifications: {
        title: string;
        description: string;
        notificationId: string;
    }[];
}

export function Notifications({ notifications } : NotificationsProps) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-full text-slate-600 hover:bg-slate-100 cursor-pointer">
                <Bell/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[420px]" align="end">
                <DropdownMenuLabel>
                    Notificações
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                {notifications.length === 0 ? 
                (<DropdownMenuItem>
                    <span className="text-slate-500 italic p-3 text-center">
                        Sem Notificações no momento
                    </span>
                </DropdownMenuItem>)
                :
                (notifications.map(item => (
                    <DropdownMenuItem key={item.notificationId}>
                        <CardNotifications title={item.title} description={item.description} notificationId={item.notificationId}/>
                    </DropdownMenuItem>
                )))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
} 