"use client";

import { Bell, Inbox } from "lucide-react";
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
            <DropdownMenuTrigger className="p-2 rounded-full relative text-slate-600 hover:bg-slate-100 cursor-pointer">
                <Inbox className=""/>
                    {notifications.length > 0 && 
                    <span 
                        className="w-4 h-4 rounded-full bg-red-600 text-white font-bold text-[10px] absolute top-0">
                        {notifications.length}
                    </span>
                    }
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