'use client'

import ExportedImage from "next-image-export-optimizer";
import React from "react"
import {
  Blog,
  Business,
  News,
  Products,
  allBlogs,
  allBusinesses,
  allNews,
  allProducts,
} from '../.contentlayer/generated'
import BlogCardPost from '../components/cards/BlogPostCard'
import { pick } from "contentlayer2/client";
import BusinessPostCard from "./cards/BusinessPostCard";
import NewsPostCard from "./cards/NewsPostCard";
import ProductsPostCard from "./cards/ProductsPostCard";
import Link from "next/link";
import FeaturedBlogPost, { PickedBlogPost } from "./featured/FeaturedBlog";

const BlogTabs = () => {
  const [activeTab, setActiveTab] = React.useState('all');
  let blogs = allBlogs.map((post: Blog) =>
    pick(post, ['featured', 'title', 'date', 'slug', 'image', 'author', 'description'])
  )
  blogs = blogs
    .filter((post) => post.featured === true)
    .sort(
      (a, b) =>
        new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
    )
  let business = allBusinesses.map((post: Business) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'author'])
  )
  business = business
    .filter((post) => post.featured === true)
    .slice(0, 6)

  let news = allNews.map((post: News) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'author'])
  )
  news = news.filter((post) => post.featured === true).slice(0, 4)

  let products = allProducts.map((post: Products) =>
    pick(post, ['featured', 'image', 'title', 'date', 'slug', 'description', 'author'])
  )
  products = products.filter((post) => post.featured === true).slice(0, 4)

  const renderContent = () => {
    switch (activeTab) {
      case 'all':
        return (
          <>
            {/* feature article */}
            <section className="bg-[#F6F6F9] py-[6rem]">
              <div className="container mx-auto">
                <h2 className="font-medium text-[1.6rem] leading-[2.5rem] text-[#525F7A]">FEATURED ARTICLES</h2>
                <FeaturedBlogPost post={blogs[3] as PickedBlogPost} />
              </div>
            </section>
            <section className="px-[0.8rem] md:px-[1.4rem] lg:px-0 container mx-auto">
              <div className="grid xl:grid-cols-3 gap-[5rem] flex-wrap">
                {blogs.map((post) => (
                  <BlogCardPost key={post.slug} post={post as Blog} />
                ))}
                {business.map((post) => (
                  <BusinessPostCard key={post.slug} post={post as Business} />
                ))}
                {news.map((post) => (
                  <NewsPostCard key={post.slug} post={post as News} />
                ))}
                {products.map((post) => (
                  <ProductsPostCard key={post.slug} post={post as Products} />
                ))}
              </div>
            </section>
          </>
        );

      case 'business':
        return (
          <section>
            <div className="bg-[#F6F6F9] py-[6rem]">
              <div className="container mx-auto">
                <h2 className="font-medium text-[3.6rem] leading-[4.5rem] text-[#1A1A1A]">Business Updates</h2>
                <p className="text-[1.6rem] leading-[2.5rem] text-[#525F7A] mt-4">
                  Stay informed about Circle's latest business developments and strategic initiatives.
                </p>
              </div>
            </div>
            <div className="px-[0.8rem] md:px-[1.4rem] lg:px-0 container mx-auto">
              <div className="grid xl:grid-cols-3 gap-[5rem] flex-wrap">
                {business.map((post) => (
                  <BusinessPostCard key={post.slug} post={post as Business} />
                ))}
              </div>
              <div className="flex justify-end mt-10 text-lg">
                <Link href="/business" className="">View all &rarr;</Link>
              </div>
            </div>
          </section>
        );
      case 'news':
        return (
          <>
            <section className="bg-[#F6F6F9] py-[6rem]">
              <div className="container mx-auto">
                <h2 className="font-medium text-[3.6rem] leading-[4.5rem] text-[#1A1A1A]">Latest News</h2>
                <p className="text-[1.6rem] leading-[2.5rem] text-[#525F7A] mt-4">
                  Get the latest news and updates from Circle and the broader financial technology industry.
                </p>
              </div>
            </section>
            <section className="px-[0.8rem] md:px-[1.4rem] lg:px-0 container mx-auto">
              <div className="grid xl:grid-cols-3 gap-[5rem] flex-wrap">
                {news.map((post) => (
                  <NewsPostCard key={post.slug} post={post as News} />
                ))}
              </div>
              <div className="flex justify-end mt-10 text-lg">
                <Link href="/business" className="">View all &rarr;</Link>
              </div>
            </section>
          </>
        );
      case 'product':
        return (
          <>
            <section className="bg-[#F6F6F9] py-[6rem]">
              <div className="container mx-auto">
                <h2 className="font-medium text-[3.6rem] leading-[4.5rem] text-[#1A1A1A]">Product Updates</h2>
                <p className="text-[1.6rem] leading-[2.5rem] text-[#525F7A] mt-4">
                  Explore the latest features and improvements to Circle's product offerings.
                </p>
              </div>
            </section>
            <section className="px-[0.8rem] md:px-[1.4rem] lg:px-0 container mx-auto">
              <div className="grid xl:grid-cols-3 gap-[5rem] flex-wrap">
                {products.map((post) => (
                  <ProductsPostCard key={post.slug} post={post as Products} />
                ))}
              </div>
              <div className="flex justify-end mt-10 text-lg">
                <Link href="/business" className="">View all &rarr;</Link>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <>
      <section className="container mx-auto py-12">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-[1.13rem] leading-[1.6rem] font-medium ${activeTab === 'all'
              ? 'text-[#663399] border-b-2 border-[#004fff]'
              : 'text-[#17191c] hover:border-b-2 hover:border-[#004fff] hover:text-[#004fff]'
              }`}
          >
            ALL
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`px-4 py-2 text-[1.13rem] leading-[1.6rem] font-medium ${activeTab === 'business'
              ? 'text-[#004fff] border-b-2 border-[#004fff]'
              : 'text-[#17191c] hover:border-b-2 hover:border-[#004fff] hover:text-[#004fff]'
              }`}
          >
            BUSINESS
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 text-[1.13rem] leading-[1.6rem] font-medium ${activeTab === 'news'
              ? 'text-[#004fff] border-b-2 border-[#004fff]'
              : 'text-[#17191c] hover:border-b-2 hover:border-[#004fff] hover:text-[#004fff]'
              }`}
          >
            NEWS
          </button>
          <button
            onClick={() => setActiveTab('product')}
            className={`px-4 py-2 text-[1.13rem] leading-[1.6rem] font-medium ${activeTab === 'product'
              ? 'text-[#004fff] border-b-2 border-[#004fff]'
              : 'text-[#17191c] hover:border-b-2 hover:border-[#004fff] hover:text-[#004fff]'
              }`}
          >
            PRODUCT UPDATES
          </button>
        </div>
      </section>
      {renderContent()}
    </>
  )
}

export default BlogTabs
