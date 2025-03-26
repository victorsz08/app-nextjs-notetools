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
        <Card className="w-full py-6">
            <CardContent>
                <span className="flex items-center text-slate-500 justify-between mb-3">
                    <p className="text-sm text-slate-600">{props.title}</p>
                    <props.icon size={16}/>
                </span>
                <p className="text-2xl font-semibold text-slate-700">
                    {
                        props.type === "currency" ?
                        (
                            "R$" + props.value.toLocaleString("pt-BR", 
                                { currency: "BRL", maximumFractionDigits: 2, minimumFractionDigits: 2 }
                            )
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