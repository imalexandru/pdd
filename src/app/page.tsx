import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Prompt-Driven Development
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                A methodology for building sustainable AI-powered applications. Transform how you work with AI tools through structured, repeatable processes.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                href="/docs/introduction"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                href="/blog"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Structured Approach</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Replace chaotic "vibe coding" with a systematic methodology that brings software engineering principles to AI development.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Documentation First</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Build maintainable systems by starting with clear documentation that guides both humans and AI through the development process.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Scalable Process</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Develop applications that can grow with your team using repeatable patterns and clear communication with AI tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
