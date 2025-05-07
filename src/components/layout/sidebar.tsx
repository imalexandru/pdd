import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface DocLink {
  title: string
  href: string
}

interface DocCategory {
  title: string
  items: DocLink[]
}

const docLinks: DocCategory[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "What is PDD?", href: "/docs/what-is-pdd" },
      { title: "Key Principles", href: "/docs/key-principles" },
      { title: "Methodology", href: "/docs/methodology" },
    ]
  },
  {
    title: "Guides",
    items: [
      { title: "Planning with AI", href: "/docs/planning-with-ai" },
      { title: "Documentation First", href: "/docs/documentation-first" },
      { title: "Feature Development", href: "/docs/feature-development" },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <nav className="relative">
        <div className="space-y-8">
          {docLinks.map((category) => (
            <div key={category.title} className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground/70 uppercase tracking-wide">
                {category.title}
              </h4>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                      pathname === item.href 
                        ? "bg-accent text-accent-foreground" 
                        : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                    )}
                  >
                    <ChevronRight className={cn(
                      "mr-2 h-4 w-4 transition-transform",
                      pathname === item.href ? "transform rotate-90" : "opacity-0 group-hover:opacity-100"
                    )} />
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
} 