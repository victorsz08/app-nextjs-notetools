"use client";

import { BriefcaseBusiness, ChartNoAxesColumnIncreasing, SquarePercent } from "lucide-react";
import { CardInfo, CardInfoProps } from "./card-info";



export type OverviewDataProps = {
    data: {
        revenue: number;
        revenueHelp: string;
        sales: number;
        salesHelp: string;
        completionRate: number;
        completionRateHelp: string;
    }
}

export function CardOverview({ data } : OverviewDataProps) {
    const revenue: CardInfoProps = {
        info: {
            title: "Faturamento",
            help: data.revenueHelp,
            icon: ChartNoAxesColumnIncreasing,
            value: data.revenue,
            valueType: "currency"
        }
    };
    
    const sales: CardInfoProps = {
        info: {
            title: "Vendas",
            help: data.salesHelp,
            icon: BriefcaseBusiness,
            value: data.sales,
            valueType: "number"
        }
    }
    
    const completionRate: CardInfoProps = {
        info: {
            title: "Percentual de instalação",
            help: data.completionRateHelp,
            icon: SquarePercent,
            value: data.completionRate,
            valueType: "percent"
        }
    }

    return (
        <section className="w-full flex gap-4">
            <CardInfo info={revenue.info}/>
            <CardInfo info={sales.info}/>
            <CardInfo info={completionRate.info}/>
        </section>
    )
}