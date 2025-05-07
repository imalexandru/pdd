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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <TopNav />
      <div className="container mx-auto flex-1 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {isDocsPage && (
            <aside className="sticky top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border bg-background py-6 pr-6 md:block md:w-64 lg:w-72">
              <Sidebar />
            </aside>
          )}
          <main
            className={`flex-1 py-6 md:py-8 ${isDocsPage ? 'md:pl-8 lg:pl-10' : ''
              }`}
          >
            <div className="prose prose-slate mx-auto max-w-4xl dark:prose-invert prose-headings:font-semibold prose-a:text-primary hover:prose-a:text-primary/80 prose-code:before:content-[''] prose-code:after:content-['']">
              {children}
            </div>
          </main>
        </div>
      </div>
      {/* You can add a footer here if needed */}
    </div>
  )
} 