"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";


export type CardOverviewProps = {
    title: string;
    icon: LucideIcon;
    value: number;
    type: "currency" | "percent" | "int";
    help: string;
}
export function CardOverview(props: CardOverviewProps) {

    return (
        <Card className="w-full">
            <CardContent>
                <span className="flex items-center text-slate-500 justify-between">
                    <p className="text-sm">{props.title}</p>
                    <props.icon size={12}/>
                </span>
                <p className="text-2xl font-bold text-slate-700">
                    {
                        props.type === "currency" ?
                        (
                            props.value.toLocaleString("pt-BR", { currency: "BRL", maximumFractionDigits: 2 })
                        ) 
                        :
                        props.type === "percent" ?
                        ( `${props.value}%`)
                        :
                        ( props.value )
                    }
                </p>
                <p className="text-xs font-light text-slate-400">{props.help}</p>
            </CardContent>
        </Card>
    )
}