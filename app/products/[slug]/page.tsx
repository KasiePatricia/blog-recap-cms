import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Products, allProducts } from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import PostFooter from '../../../components/PostFooter'
import PostHeader from '../../../components/PostHeader'
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from '../../../config'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = allProducts.find(
    (product) => product.slug === params.slug
  ) as Products

  if (!product) {
    return notFound()
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/product/${product.slug}/`,
      title: product.title,
      description: product.description,
      publishedTime: product.date,
      authors: `${AUTHOR_NAME}`,
      tags: product.tags,
      images: [
        {
          url: `${SITE_URL}${product.image}`,
          width: 1600,
          height: 800,
          alt: `${SITE_NAME}`,
          type: 'image/jpeg',
        },
      ],
      siteName: `${SITE_NAME}`,
    },
  }
}

export default function ProductsPage({ params }: { params: { slug: string } }) {
  const products = allProducts.find(
    (product) => product.slug === params.slug
  )

  if (!products) {
    return notFound()
  }

  return (
    <Layout>
      <article className="max-w-4xl p-4 sm:p-12 sm:pt-0 m-auto">
        <PostHeader data={products as Products} />
        <figure className="flex flex-col gap-2 mt-12 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
          <a
            href={products.link}
            target="_blank"
            title={`Open products on a new tab`}
          >
            <img
              src={products.image}
              alt={products.title}
              className="w-full h-auto"
            />
          </a>
        </figure>
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: products.body.html }}
        ></div>
        <PostFooter data={products} />
      </article>
    </Layout>
  )
}
