"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export type CardInfoProps = {
    info: {
        title: string;
        help: string;
        icon: LucideIcon;
        value: number;
        valueType: "currency" | "percent" | "number";
    }
}


export function CardInfo({ info } : CardInfoProps) {
    return (
        <Card className="w-full pb-10">
            <CardHeader className="flex justify-between items-center mb-1">
                <CardTitle className="text-sm text-slate-500 font-normal">{info.title}</CardTitle>
                {info.icon && <info.icon className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-600">
                    {info.valueType === "currency" ? 
                    (
                        info.value.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })
                    )
                    : info.valueType === "percent" ?
                     (
                        `${info.value.toFixed(2)}%`
                    )
                    : info.value
                    }  
                </div>
                <p className="text-xs text-muted-foreground">
                    {info.help}
                </p>
            </CardContent>
        </Card>
    )
}