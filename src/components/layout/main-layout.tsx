"use client"

import { TopNav } from './top-nav'
import { Sidebar } from './sidebar'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith('/docs')

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <TopNav />
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row relative">
          {isDocsPage && (
            <aside className="fixed top-14 z-30 -ml-4 md:ml-0 w-[280px] shrink-0 border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:sticky md:block transition-transform duration-300 ease-in-out">
              <div className="h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pr-4 pl-4 md:pl-0">
                <Sidebar />
              </div>
            </aside>
          )}
          <main className={cn(
            "flex-1 py-6 transition-all duration-300 ease-in-out",
            isDocsPage ? "md:pl-8" : "",
            "prose dark:prose-invert max-w-none"
          )}>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
} 