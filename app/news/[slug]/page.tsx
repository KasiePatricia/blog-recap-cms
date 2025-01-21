import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allNews, News } from '../../../.contentlayer/generated'
import Layout from '../../../components/Layout'
import PostHeader from '../../../components/PostHeader'
import PostFooter from '../../../components/PostFooter'
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from '../../../config'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'

// Metadata function for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const news = allNews.find((news) => news.slug === params.slug) as News

  if (!news) {
    return notFound()
  }

  return {
    title: news.title,
    description: news.description,
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/news/${news.slug}`,
      title: news.title,
      description: news.description,
      publishedTime: news.date,
      authors: `${AUTHOR_NAME}`,
      tags: news.tags,
      images: [
        {
          url: `${SITE_URL}${news.image}`,
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

export default function NewsPage({ params }: { params: { slug: string } }) {
  const news = allNews.find(
    (news: News) => news.slug === params.slug
  )

  if (!news) {
    return notFound()
  }

  return (
    <Layout>
      <article className="max-w-4xl p-4 sm:p-12 sm:pt-0 m-auto">
        <PostHeader data={news} />
        <Link
          href={news.link as string}
          title="Open news on a new tab"
          target="_blank"
          className="block mb-16 lg:mb-24"
        >
          <ExportedImage
            src={news.image}
            alt={news.title}
            width={1800}
            height={1800}
            className="rounded-xl shadow-md hover:shadow-xl transition-shadow transition-300"
            loading="lazy"
          />
        </Link>
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: news.body.html }}
        ></div>
        <PostFooter data={news} />
      </article>
    </Layout>
  )
}
