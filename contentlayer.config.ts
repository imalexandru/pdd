import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { Pluggable } from 'unified'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'string', required: true },
    published: { type: 'boolean', default: true },
    order: { type: 'number', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('docs/', ''),
    },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.md',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    published: { type: 'boolean', default: true },
    author: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace('blog/', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Doc, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-ignore - Known type issue with rehype plugins
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, {
        theme: 'github-dark',
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }]
          }
        }
      }],
      [rehypeAutolinkHeadings, {
        properties: {
          className: ['anchor']
        }
      }]
    ] as Pluggable[]
  },
}) 