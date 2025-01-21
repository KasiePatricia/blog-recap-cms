'use client' // Marks this as a client component

import Link from 'next/link'
import { Business } from '../.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import Video from './Video'
import type { MDXComponents } from 'mdx/types'
import ExportedImage from 'next-image-export-optimizer'

export default function BusinessPost({
  business,
}: {
  business: Business
}) {
  const MDXContent = useMDXComponent(business.body.code)

  // Define custom MDX components.
  const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
    Video: ({ src }) => <Video src={src as string} />,

    // Add more custom components...
  }

  return (
    <article className="container mx-auto pt-[2rem] sm:pt-[5rem] lg:pt-[8rem] m-auto">
      <div className="px-4 sm:px-12 lg:px-[20rem]">
        <PostHeader data={business as Business} />
        <figure className="overflow-hidden rounded-[2rem] mt-[6.1rem]">
          <ExportedImage
            src={business.image}
            alt={business.title}
            width={809}
            height={590}
            className=""
            loading="lazy"
          />
        </figure>
        <div className="flex items-start gap-24 mt-[7.6rem] mb-[6rem] md:mb-[16rem]">
          <div className='grid gap-[7.1rem] w-[20rem] max-w-[20%]'>
            <div className="flex gap-[1rem] items-center">
              <div className="bg-[#5050b0] h-[3.8rem] w-[3.8rem] rounded-full"></div>
              <p className="text-[#1a1a1a] font-medium text-[1.5rem] leading-[2.2rem]">{business.author}</p>
            </div>
            <div>
              <p className="text-[#49546C] font-medium text-[1.3rem] leading-[1.9rem] tracking-[0.02rem]">SHARE THIS POST</p>
              <div className='flex items-center gap-[0.4rem] mt-[1.2rem] w-[7.2rem] bg-black rounded-full py-[0.5rem] px-[1.2rem]'>
                <ExportedImage
                  src={'/media/x-logo.svg'}
                  alt={'x-logo'}
                  width={18}
                  height={18}
                  className=""
                />
                <p className="text-white font-medium text-[1.3rem] leading-[1.6rem]">Post</p>
              </div>
            </div>
          </div>
          <div className="blog-post -mt-[3rem] w-[63rem] max-w-[80%]">
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </div>

      <PostFooter data={business as Business} />
    </article>
  )
}
