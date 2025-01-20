import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `page/*.md`,
  contentType: 'markdown',
  fields: {
    slug: {
      type: 'string',
    },
    title: {
      type: 'string',
      required: true,
    },
    subTitle: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    gallery: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
    author: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Business = defineDocumentType(() => ({
  name: 'Business',
  filePathPattern: `business/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
    author: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ''),
    },
  },
}))

const News = defineDocumentType(() => ({
  name: 'News',
  filePathPattern: `news/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    link: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
    author: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

const Products = defineDocumentType(() => ({
  name: 'Products',
  filePathPattern: `products/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
    link: {
      type: 'string',
      required: false,
    },
    image: {
      type: 'string',
      required: true,
    },
    templateKey: {
      type: 'string',
      required: true,
    },
    featured: {
      type: 'boolean',
      required: false,
    },
    author: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Page, Blog, Business, News, Products],
  disableImportAliasWarning: true,
})
