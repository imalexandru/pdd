import { allPosts, type Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = allPosts.find((post: Post) => post.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = allPosts.find((post: Post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="container mx-auto max-w-4xl py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">{post.title}</h1>
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent />
      </div>
    </article>
  )
} 