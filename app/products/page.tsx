import { Metadata } from 'next'
import { pick } from '@contentlayer2/client'
import {
  Products as ProductType,
  allProducts,
} from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'
import CategoryHeader from '../../components/CategoryHeader'
import ProductsPostCard from '../../components/cards/ProductsPostCard'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Collection of Product by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Explore a curated collection of Product related with accessibility, ui and ux patterns, and source materials for developers and designers.',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/products/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: `${SITE_URL}/og-card.png`,
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

export default function Product() {
  //  help of pick get require filter value
  const product = allProducts.map((product) =>
    pick(product, [
      'title',
      'date',
      'slug',
      'description',
      'image',
      'templateKey',
    ])
  )

  return (
    <Layout>
      <section className="max-w-2xl m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader
          title="Product"
          templateKey={product[0].templateKey!}
        />

        <div className="flex flex-wrap gap-4 w-full">
          {product.map((productItem) => {
            return (
              <ProductsPostCard
                key={productItem.slug}
                post={productItem as ProductType}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
