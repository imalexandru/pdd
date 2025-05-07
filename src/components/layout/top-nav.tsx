import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, Github, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export function TopNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setIsSearchOpen((prev) => !prev)
      }
      if (event.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M15 6l-6 6 6 6"/>
            </svg>
            <span className="font-semibold text-lg">PDD</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link
              href="/docs"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="/blog"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:inline-flex"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Link
            href="https://github.com/yourusername/pdd-net"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon" className="w-9 h-9">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <nav className="container px-4 py-4">
            <div className="grid gap-3">
              <Link
                href="/docs"
                className="block rounded-md p-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/blog"
                className="block rounded-md p-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => { setIsSearchOpen(true); setIsOpen(false); }}
                className="w-full justify-start mt-2"
              >
                <Search className="mr-2 h-4 w-4" /> Search...
              </Button>
            </div>
          </nav>
        </div>
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}>
          <div 
            className="fixed left-1/2 top-1/4 z-[101] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg border bg-background p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b">
              <h3 className="text-lg font-semibold">Search Documentation</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="h-7 w-7">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <input 
              type="text" 
              placeholder="Type to search..." 
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
            <div className="mt-4 text-sm text-muted-foreground">
              Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">ESC</kbd> to close.
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 