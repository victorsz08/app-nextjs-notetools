import { BriefcaseBusiness, ChartNoAxesColumnDecreasing, ChartPie } from "lucide-react";
import { CardOverview } from "./card-overview";


export type CardDashoardDataProps = {
    revenue: number;
    sales: number;
    completionRate: number;
}

export function CardDashboard({ data }: { data: CardDashoardDataProps }) {

    return (
        <section className="flex gap-4">
            <CardOverview
                title="Faturamento"
                help="Valores de pedidos instalados"
                icon={ChartNoAxesColumnDecreasing}
                type="currency"
                value={data.revenue}
            />
            <CardOverview
                title="Vendas"
                help="Total de vendas concluídas"
                icon={BriefcaseBusiness}
                type="int"
                value={data.sales}
            />
            <CardOverview
                title="Percentual de instalação"
                help="Percentual de pedidos instalados"
                icon={ChartPie}
                type="percent"
                value={data.completionRate}
            />
        </section>
    )
}