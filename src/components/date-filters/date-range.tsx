"use client"

import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon } from "lucide-react"
import { format, subDays } from "date-fns"
import { ptBR } from "date-fns/locale"

export interface DateRange {
  from: Date
  to: Date
};

export interface DateFiltersProps {
    dateRange: DateRange;
    onDateChange: (newDate: DateRange) => void;
}

export function DateRangeFilters({ dateRange, onDateChange }: DateFiltersProps) {
  const [filterPeriod, setFilterPeriod] = useState<string>("30d")

  const handleFilterChange = (period: string) => {
    setFilterPeriod(period)

    const today = new Date()
    let from = today
    let to = today

    if (period === "7d") {
      from = subDays(today, 7)
    } else if (period === "14d") {
      from = subDays(today, 14)
    } else if (period === "30d") {
      from = subDays(today, 30)
    } else if (period === "1d") {
      from = subDays(today, 1)
    to = subDays(today, 1)
    } else if (period === "today") {
      from = today
    } else if (period === "custom") {
      return
    }

    onDateChange({ from, to })
  }

  const handleDateRangeChange = (range: DateRange | any) => {
    onDateChange(range)
    setFilterPeriod("custom")
  }

  return (
          <div className="flex flex-col sm:flex-row items-center gap-2 p-4">
            <Popover>
                <PopoverTrigger>
                    <div
                        className="justify-start text-left font-normal w-full 
                        rounded-sm text-slate-500 text-sm flex items-center gap-1 
                        border border-slate-500 sm:w-[300px] p-2"
                    >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                        dateRange.to ? (
                        <>
                            {format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                            {format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })}
                        </>
                        ) : (
                        format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })
                        )
                    ) : (
                        <span>Selecione um período</span>
                    )}
                    </div>
                </PopoverTrigger>
              <PopoverContent className="w-auto p-0 flex items-start gap-8" align="end">
                <Tabs
                  className="flex flex-col gap-1 bg-white text-start"
                  value={filterPeriod}
                  onValueChange={handleFilterChange}
                >
                  <TabsList className="flex flex-col gap-2 h-full p-3 text-start bg-white">
                      <TabsTrigger 
                          className="data-[state=active]:shadow-none 
                          data-[state=active]:text-purple-700 flex cursor-pointer justify-start p-2 w-full" 
                          value="30d">
                            Últimos 30 dias
                        </TabsTrigger>
                    <TabsTrigger 
                        className="data-[state=active]:shadow-none 
                        data-[state=active]:text-purple-700 flex cursor-pointer justify-start p-2 w-full" 
                        value="7d">
                            Últimos 7 dias
                        </TabsTrigger>
                    <TabsTrigger 
                        className="data-[state=active]:shadow-none 
                        data-[state=active]:text-purple-700 flex cursor-pointer justify-start p-2 w-full" 
                        value="1d">
                            Ontem
                    </TabsTrigger>
                    <TabsTrigger 
                        className="data-[state=active]:shadow-none 
                        data-[state=active]:text-purple-700 flex cursor-pointer justify-start p-2 w-full" 
                        value="today">
                            Hoje
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={handleDateRangeChange}
                  numberOfMonths={2}
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
          </div>
  )
}
