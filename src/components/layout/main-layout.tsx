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
    <div className="relative min-h-screen flex flex-col">
      <TopNav />
      <div className="flex-1">
        <div className="border-b">
          <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            {isDocsPage && (
              <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                <div className="h-full py-6 pl-8 pr-6 lg:py-8">
                  <Sidebar />
                </div>
              </aside>
            )}
            <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid">
              <div className="mx-auto w-full min-w-0">
                <div className="pb-12 pt-1">
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
} 