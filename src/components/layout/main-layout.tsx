"use client"

import { TopNav } from './top-nav'
import { Sidebar } from './sidebar'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { useState } from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith('/docs')
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <div className="flex-1 flex">
        {isDocsPage && (
          <>
            {/* Mobile Sidebar */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden absolute left-4 top-16 z-50">
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0 pt-10">
                <Sidebar />
              </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <aside className="fixed inset-y-0 top-14 z-30 hidden w-64 border-r bg-background md:block">
              <Sidebar />
            </aside>
          </>
        )}

        <main className={cn(
          "flex-1 overflow-auto",
          isDocsPage && "md:pl-64"
        )}>
          <div className="container mx-auto py-6 px-4 md:px-8 lg:px-12">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:py-0.5">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 