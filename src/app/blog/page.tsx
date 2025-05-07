import { allPosts, type Post } from 'contentlayer/generated'
import Link from 'next/link'

export default function BlogPage() {
  const posts = allPosts.filter((post: Post) => post.published)
    .sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="container mx-auto max-w-4xl">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="space-y-8">
        {posts.map((post: Post) => (
          <article key={post.slug} className="group relative rounded-lg border p-6 hover:bg-accent">
            <h2 className="text-2xl font-semibold tracking-tight">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="absolute inset-0"
              aria-hidden="true"
            />
          </article>
        ))}
      </div>
    </div>
  )
} 