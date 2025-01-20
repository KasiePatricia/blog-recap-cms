import Link from 'next/link'
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
import Tag from './Tag'
import { Icon } from './Icon'
import { pick } from 'contentlayer2/client'
import BlogCardPost from '../components/cards/BlogPostCard'

export default function PostFooter({
  data,
}: {
  data: Blog | Business | News | Products
}) {
  let navPosts: (Blog | Business | News | Products)[] = []

  switch (data.templateKey) {
    case 'blog':
      navPosts = allBlogs as Blog[]
      break
    case 'business':
      navPosts = allBusinesses as Business[]
      break
    case 'news':
      navPosts = allNews as News[]
      break
    case 'products':
      navPosts = allProducts as Products[]
      break
  }

  // Find the index of the current post
  const currentIndex = navPosts.findIndex((post) => post.slug === data.slug)

  // Determine the previous and next posts
  const prevPost = currentIndex > 0 ? navPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < navPosts.length - 1 ? navPosts[currentIndex + 1] : null
  
    let blogs = allBlogs.map((post: Blog) =>
      pick(post, ['featured', 'title', 'date', 'slug', 'image', 'author', 'description'])
    )
    blogs = blogs
      .filter((post) => post.featured === true)
      .sort(
        (a, b) =>
          new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
      )

  return (
    <>
      {/* {data.tags && (
        <div className="mt-24 mb-12 flex flex-col gap-4">
          <h2 className="font-bold">This post was tagged in:</h2>
          <ul className="flex gap-4 flex-wrap ">
            {data.tags.map((tag: string) => {
              return (
                <li key={tag}>
                  <Tag tag={tag} />
                </li>
              )
            })}
          </ul>
        </div>
      )} */}
      <div className="grid xl:grid-cols-3 gap-[5rem] flex-wrap">
        {blogs.slice(0, 3).map((post) => (
          <BlogCardPost key={post.slug} post={post as Blog} />
        ))}
      </div>
      {(prevPost || nextPost) && (
        <div className="flex flex-col lg:flex-row justify-between gap-12 xl:gap-24 mt-24 py-8 border-t border-t-slate-300 dark:border-t-slate-700">
          {prevPost && (
            <Link
              href={`/${prevPost.templateKey}/${prevPost.slug}`}
              className="text-balance max-w-[24rem] group rounded outline-offset-[1rem]"
            >
              <span className="flex items-center gap-2 mb-2 justify-start text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 duration-300">
                <Icon name="prev" className="size-3" />
                Previous
              </span>
              {prevPost.title}
            </Link>
          )}
          {nextPost && (
            <Link
              href={`/${nextPost.templateKey}/${nextPost.slug}`}
              className="text-end text-balance max-w-[24rem] group rounded outline-offset-[1rem] ml-auto"
            >
              <span className="flex items-center gap-2 mb-2 justify-end text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 duration-300">
                Next
                <Icon name="next" className="size-3" />
              </span>
              {nextPost.title}
            </Link>
          )}
        </div>
      )}
    </>
  )
}
