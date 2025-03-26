"use client";

import { useState } from "react";
import { DateRange, DateRangeFilters } from "../date-filters/date-range";
import { startOfMonth } from "date-fns";
import { CardDashboard } from "../cards/card-dashboard";

const data = {
  revenue: 4184.80,
  sales: 52,
  completionRate: 89
}

export function DashboardSection() {
  const [dateRage, setDateRange] = useState<DateRange>({
    to: new Date(),
    from: startOfMonth(new Date())
  });

  return (
    <section className="p-4">
      <div className="w-full flex justify-end items-center">
        <DateRangeFilters dateRange={dateRage} onDateChange={(value: DateRange) => setDateRange(value)}/>
      </div>
      <CardDashboard data={data}/>
    </section>
  )
}