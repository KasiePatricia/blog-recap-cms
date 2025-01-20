import Layout from '../components/Layout'
import {
  allPages,
} from '../.contentlayer/generated'
import { Metadata } from 'next'
import { Icon } from '../components/Icon'
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '../config'
import SearchForAnArticle from '../components/SearchForAnArticle'
import BlogTabs from '../components/BlogTabs'

// Get page data
const home = allPages.find((home) => home?.slug === 'home')

// Metadata function for SEO
export function generateMetadata(): Metadata {
  const SEO = {
    title: home?.title || 'Home',
    description: home?.description || `Welcome to the Homepage of ${SITE_NAME}`,
    image: `${SITE_URL}/og-card.png`,
  }

  return {
    title: SEO.title,
    description: SEO.description,
    openGraph: {
      url: `${SITE_URL}/`,
      title: SEO.title,
      description: SEO.description,
      authors: `${AUTHOR_NAME}`,
      images: [
        {
          url: SEO.image,
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

// Get all posts and pick specific fields
export default function Home() {

  return (
    <Layout>
      <div className="flex flex-col gap-24 xl:gap-32 pb-24 xl:pb-36">
        <section className="hero-img">
          <div className="flex justify-center items-center h-full container mx-auto">
            <div className="grid gap-[3rem] container mx-auto">
              <h2 className="text-white text-[1.5rem] font-medium lg:text-[1.5rem] leading-[2.3rem] font-circular-bold">
                {home?.subTitle}
              </h2>
              <h1 className="text-white text-[6.125rem] font-medium lg:text-[6.125rem] leading-[6.4rem] font-circular-bold">
                {home?.title}
              </h1>
              <p className="text-[1rem] lg:text-[1.6rem] text-white leading-[2.8rem] font-medium max-w-[55.9rem]">
                {home?.description}
              </p>
              <SearchForAnArticle />
            </div>
          </div>
        </section>
        <BlogTabs />

      </div>
    </Layout>
  )
}
