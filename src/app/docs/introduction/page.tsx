import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Introduction to PDD</h1>
        <p className="text-lg text-muted-foreground">
          Learn about Prompt-Driven Development (PDD) and how it can help you build better AI-powered applications.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Badge>New</Badge>
          <Badge variant="outline">Documentation</Badge>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">What is PDD?</h2>
        <p>
          Prompt-Driven Development (PDD) is a methodology for building sustainable AI-powered 
          applications. It combines the speed and power of modern AI tools with the discipline and 
          best practices of software engineering.
        </p>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Key Benefits</CardTitle>
            <CardDescription>Why you should consider using PDD for your next project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>Improved development speed and efficiency</li>
              <li>Better communication with AI models</li>
              <li>More maintainable and scalable code</li>
              <li>Enhanced collaboration between humans and AI</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <a href="/docs/key-principles">Learn more about key principles</a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Core Concepts</h2>
        <p>
          PDD is built on several core concepts that guide the development process.
          Let's explore these concepts and how they work together.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Documentation First</AccordionTrigger>
            <AccordionContent>
              In PDD, we start with clear documentation. This helps both humans and AI understand 
              what we're trying to build. It serves as a common reference point and reduces 
              miscommunication.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Structured Prompting</AccordionTrigger>
            <AccordionContent>
              Using well-defined patterns for interacting with AI ensures consistency and 
              better results. We create templates for different types of tasks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Iterative Development</AccordionTrigger>
            <AccordionContent>
              We build and validate in small, manageable steps. This allows for 
              frequent feedback and course correction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quality Focus</AccordionTrigger>
            <AccordionContent>
              Emphasis on testing and code quality ensures that AI-generated code 
              meets our standards and can be maintained over time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Getting Started</h2>
        <p>
          Ready to try PDD? Follow these steps to get started with your first project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>1. Define Your Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              Create clear documentation about what you're building. Include user stories, 
              acceptance criteria, and any technical constraints.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Set Up Your Development Environment</CardTitle>
            </CardHeader>
            <CardContent>
              Install the necessary tools and create a project structure that supports 
              good practices and modularity.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Write Your First Prompt</CardTitle>
            </CardHeader>
            <CardContent>
              Create a structured prompt that describes a specific component or 
              feature you want to implement.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>4. Implement and Iterate</CardTitle>
            </CardHeader>
            <CardContent>
              Generate code, review it, test it, and refine your prompts based on the results.
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-6">
          <Button asChild>
            <a href="/docs/quick-start">Continue to Quick Start Guide</a>
          </Button>
        </div>
      </div>
    </div>
  )
} 