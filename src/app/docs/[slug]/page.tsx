import { allDocs, type Doc } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface DocPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allDocs.map((doc: Doc) => ({
    slug: doc.slug,
  }))
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const doc = allDocs.find((doc: Doc) => doc.slug === params.slug)

  if (!doc) {
    return {
      title: 'Documentation Not Found',
    }
  }

  return {
    title: `${doc.title} - PDD Documentation`,
    description: doc.description,
  }
}

export default function DocPage({ params }: DocPageProps) {
  const doc = allDocs.find((doc: Doc) => doc.slug === params.slug)

  if (!doc) {
    notFound()
  }

  const MDXContent = useMDXComponent(doc.body.code)

  return (
    <article className="max-w-3xl py-6">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">{doc.title}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          {doc.description}
        </p>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent />
      </div>
    </article>
  )
} 