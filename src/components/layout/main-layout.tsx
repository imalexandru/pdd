"use client"

import { TopNav } from './top-nav'
import { Sidebar } from './sidebar'
import { usePathname } from 'next/navigation'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith('/docs')

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <TopNav />
      <div className="container mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex">
          {isDocsPage && (
            <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block">
              <Sidebar />
            </aside>
          )}
          <main className={`flex-1 py-6 ${isDocsPage ? 'md:pl-64' : ''}`}>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
} 