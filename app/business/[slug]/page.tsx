import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBusinesses, Business } from '../../../.contentlayer/generated'

import Layout from '../../../components/Layout'
import InspirationPost from '../../../components/BusinessPost'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../../config'
import BusinessPost from '../../../components/BusinessPost'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const business = allBusinesses.find(
    (business) => business.slug === params.slug
  ) as Business

  if (!business) {
    return notFound()
  }

  return {
    title: business.title,
    description: business.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/business/${business.slug}/`,
      title: business.title,
      description: business.description,
      publishedTime: business.date,
      authors: `${AUTHOR_NAME}`,
      tags: business.tags,
      images: [
        {
          url: `${SITE_URL}${business.image}`,
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

export default function BusinessPage({
  params,
}: {
  params: { slug: string }
}) {
  const business = allBusinesses.find(
    (business) => business.slug === params.slug
  )

  return (
    <Layout>
      <BusinessPost business={business as Business} />
    </Layout>
  )
}
