"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb";
import { House } from "lucide-react";


export function Bread() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter((path) => path !== "");

    return (
        <Breadcrumb>
            <BreadcrumbList className="text-[14px] font-normal">
            <BreadcrumbSeparator/>
                {segments.map((segment, index) => (
                    <>
                        <BreadcrumbItem className={`${segment === segments[index] ? "text-slate-600" : "text-slate-400"}`} key={index}>
                            {segment.charAt(0).toUpperCase() + segment.slice(1)}
                        </BreadcrumbItem>
                        {index < segments.length - 1 && <BreadcrumbSeparator/>}
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}