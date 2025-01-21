import { Metadata } from 'next'
import { pick } from '@contentlayer2/client'
import {
  News as NewsType,
  allNews,
} from '../../.contentlayer/generated'
import Layout from '../../components/Layout'
import NewsPostCard from '../../components/cards/NewsPostCard'
import CategoryHeader from '../../components/CategoryHeader'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../../config'

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: `A Selection of News by ${AUTHOR_NAME} | ${SITE_NAME}`,
    description:
      'Listen to a curated selection of news covering web development, design, business, and electronic music. Perfect for creatives and tech enthusiasts.',
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/news/`,
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
//  help of pick get require filter value
export default function News() {
  const news = allNews.map((news) =>
    pick(news, [
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
          title={`News`}
          templateKey={news[0].templateKey!}
        />
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-12 w-full">
          {news.map((post) => {
            return (
              <NewsPostCard key={post.slug} post={post as NewsType} />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
