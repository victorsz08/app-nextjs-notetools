"use client";

import { X } from "lucide-react";
import Link from "next/link";


type CardNotificationsProps = {
    title: string;
    description: string;
    notificationId: string;
}

export function CardNotifications(item: CardNotificationsProps) {

   function onClearNotification() {
        return
    };

    return (
       <div>
            <Link 
                href={`/contratos/detalhes/${item.notificationId}`}
                className="w-full px-2 py-4 flex flex-col gap-1 border-l-6 border-purple-600"
            >
                <p className="font-semibold text-slate-600 text-sm">{item.title}</p>
                <p className="text-slate-500 font-light text-xs">{item.description}</p>
            </Link>
            <span
                onClick={onClearNotification} 
                className="absolute top-0 right-0 p-1 cursor-pointer hover:bg-slate-100 rounded-full">
                <X size={10} className="text-slate-600"/>
            </span>
       </div>
    )
}