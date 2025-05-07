import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

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
    <div className="w-64 pr-8">
      <nav className="relative">
        <div className="space-y-6">
          {docLinks.map((category) => (
            <div key={category.title} className="space-y-3">
              <h4 className="font-medium">{category.title}</h4>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
                    )}
                  >
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