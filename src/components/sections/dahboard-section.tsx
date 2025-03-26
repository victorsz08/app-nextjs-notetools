"use client";

import { useState } from "react";
import { DateRange, DateRangeFilters } from "../date-filters/date-range";
import { startOfMonth } from "date-fns";



export function DashboardSection() {
  const [dateRage, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: startOfMonth(new Date())
  });

  return (
    <section className="p-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-600">Overview</h1>
        <DateRangeFilters dateRange={dateRage} onDateChange={(value: DateRange) => setDateRange(value)}/>
      </div>
    </section>
  )
}