import { Metadata } from 'next'
import { Business, allBusinesses } from '../../.contentlayer/generated'
import { pick } from '@contentlayer2/client'
import Layout from '../../components/Layout'
import CategoryHeader from '../../components/CategoryHeader'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'
import BusinessPostCard from '../../components/cards/BusinessPostCard'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Selection of Business by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Find inspiration through web intros, show reels, and creative showcases, curated for designers and developers.',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/business/`,
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

export default function InspirationPage() {
  //  help of pick get require filter value
  const businesses = allBusinesses.map((business) =>
    pick(business, [
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
      <section className="md:max-w-[87%] m-auto flex flex-col gap-6 px-4 sm:px-12 mb-32">
        <CategoryHeader
          title="Business"
          templateKey={businesses[0].templateKey!}
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-12 w-full">
          {businesses.map((post) => {
            return (
              <BusinessPostCard key={post.slug} post={post as Business} />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
