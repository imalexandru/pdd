import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BookOpen, Home, Lightbulb, ListChecks } from 'lucide-react'

interface DocLink {
  title: string
  href: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface DocCategory {
  title: string
  icon?: React.ReactNode
  items: DocLink[]
}

const docLinks: DocCategory[] = [
  {
    title: "Getting Started",
    icon: <Home className="h-4 w-4" />,
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Quick Start", href: "/docs/quick-start", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Installation", href: "/docs/installation", icon: <BookOpen className="h-4 w-4" /> },
    ]
  },
  {
    title: "Core Concepts",
    icon: <Lightbulb className="h-4 w-4" />,
    items: [
      { title: "What is PDD?", href: "/docs/what-is-pdd", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Key Principles", href: "/docs/key-principles", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Methodology", href: "/docs/methodology", icon: <BookOpen className="h-4 w-4" /> },
    ]
  },
  {
    title: "Guides",
    icon: <ListChecks className="h-4 w-4" />,
    items: [
      { title: "Planning with AI", href: "/docs/planning-with-ai", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Documentation First", href: "/docs/documentation-first", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Feature Development", href: "/docs/feature-development", icon: <BookOpen className="h-4 w-4" /> },
      { title: "Advanced Techniques", href: "/docs/advanced-techniques", icon: <BookOpen className="h-4 w-4" />, disabled: true },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="group flex h-full flex-col gap-4 py-2 data-[collapsed=true]:py-2">
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {docLinks.map((category, index) => (
          <Accordion
            key={category.title}
            type="single"
            collapsible
            defaultValue={isPathnameInCategory(pathname, category) ? category.title : undefined}
            className="w-full"
          >
            <AccordionItem value={category.title} className="border-none">
              <AccordionTrigger className="flex items-center gap-2 py-2 text-sm hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
                {category.icon && (
                  <span className="flex h-7 w-7 items-center justify-center rounded-md border bg-background">
                    {category.icon}
                  </span>
                )}
                <span className="font-medium">{category.title}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-1 pb-4">
                <div className="flex flex-col gap-1">
                  {category.items.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.disabled ? "#" : item.href}
                      disabled={item.disabled}
                      active={pathname === item.href}
                      icon={item.icon}
                    >
                      {item.title}
                      {item.disabled && (
                        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs">Soon</span>
                      )}
                    </NavLink>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </nav>
    </div>
  )
}

function isPathnameInCategory(pathname: string | null, category: DocCategory): boolean {
  if (!pathname) return false
  return category.items.some(item => pathname === item.href)
}

interface NavLinkProps {
  href: string
  active?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

function NavLink({ href, active, disabled, icon, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        active ? "bg-accent text-accent-foreground" : "hover:bg-accent/50 hover:text-accent-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
    >
      {icon && (
        <span className="flex h-5 w-5 items-center justify-center">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </Link>
  )
} 