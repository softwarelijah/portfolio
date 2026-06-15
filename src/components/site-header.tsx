"use client"

import { usePathname } from "next/navigation"

import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

const titles: Record<string, string> = {
  "/": "Me",
  "/projects": "Projects",
  "/resume": "Resume",
}

export function SiteHeader() {
  const pathname = usePathname()
  const title =
    titles[pathname] ??
    titles[Object.keys(titles).find((p) => p !== "/" && pathname.startsWith(p)) ?? "/"]

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <h1 className="text-sm font-medium">{title}</h1>
    </header>
  )
}
