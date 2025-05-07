import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
// import { ChevronRight } from 'lucide-react' // Can be added back for collapsibles if needed

interface DocLink {
  title: string
  href: string
  disabled?: boolean // Optional: for disabled links
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
      { title: "Advanced Techniques", href: "/docs/advanced-techniques", disabled: true }, // Example disabled link
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full h-full overflow-y-auto">
      <nav className="space-y-6 pr-2">
        {docLinks.map((category, categoryIdx) => (
          <div key={category.title + categoryIdx}>
            <h4 className="mb-2 text-sm font-semibold text-foreground/90 tracking-tight">
              {category.title}
            </h4>
            <div className="space-y-1">
              {category.items.map((item, itemIdx) => (
                <Link
                  key={item.href + itemIdx}
                  href={item.disabled ? '#' : item.href}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                    item.disabled
                      ? "cursor-not-allowed text-muted-foreground/50"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href && !item.disabled
                      ? "bg-accent font-medium text-accent-foreground"
                      : ""
                  )}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : undefined}
                >
                  {/* Optional: Add an icon here if desired, e.g., based on link type */}
                  {item.title}
                  {item.disabled && <span className="ml-auto text-xs text-muted-foreground/70">(Coming soon)</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
} 