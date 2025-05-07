import { allDocs, type Doc } from 'contentlayer/generated'
import Link from 'next/link'

function groupDocsByCategory(docs: Doc[]) {
  return docs.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = []
    }
    acc[doc.category].push(doc)
    return acc
  }, {} as Record<string, Doc[]>)
}

export default function DocsPage() {
  const publishedDocs = allDocs.filter((doc: Doc) => doc.published)
  const docsByCategory = groupDocsByCategory(publishedDocs)
  const sortedCategories = Object.keys(docsByCategory).sort((a: string, b: string) => {
    const aOrder = docsByCategory[a][0].order
    const bOrder = docsByCategory[b][0].order
    return aOrder - bOrder
  })

  return (
    <div className="container mx-auto max-w-4xl py-8">
      <h1 className="mb-8 text-4xl font-bold">Documentation</h1>
      <div className="space-y-12">
        {sortedCategories.map((category) => {
          const docs = docsByCategory[category].sort((a: Doc, b: Doc) => a.order - b.order)
          return (
            <div key={category} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {docs.map((doc: Doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="group rounded-lg border p-4 hover:bg-accent"
                  >
                    <h3 className="font-medium">{doc.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {doc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
} 