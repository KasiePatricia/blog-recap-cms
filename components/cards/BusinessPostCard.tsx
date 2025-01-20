import Link from 'next/link'
import { Business } from '../../.contentlayer/generated'
import ExportedImage from 'next-image-export-optimizer'
import { formatDate } from '../../utils'

const cardClasses =
  'w-full flex flex-col gap-[2rem] pb-5 bg-white rounded-xl hover:shadow-md dark:hover:shadow-2xl transition-shadow'


export default function BusinessPostCard({ post }: { post: Business }) {
  return (
    <Link
      key={post.slug}
      href={`/business/${post.slug}/`}
      className={cardClasses + ' p-0 group overflow-hidden'}
    >
      <figure className="overflow-hidden">
        <ExportedImage
          src={post.image}
          alt={post.title}
          width={600}
          height={600}
          className="group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </figure>
      <div className="px-4 sm:px-6 sm:pt-[0.8rem] flex flex-col gap-2 text-pretty">
        <h2 className="text-[2.4rem] leading-[3.1rem] font-bold mb-[1rem]">{post.title}</h2>
        {post.description && (
          <p className="text-[1.4rem] leading-[2.4rem] text-[#363f531]">
            {post.description}
          </p>
        )}
      </div>
      <div className="flex items-center px-4 sm:px-6 gap-2">
        <span className="text-[1.3rem] leading-[1.9rem] text-[#8592ad] ">{post.author}</span>
        <span className='h-[0.15rem] w-[2rem] bg-[#888888]'>-</span>
        <span className="text-[1.3rem] leading-[1.9rem] text-[#8592ad] ">{`${formatDate(new Date(post.date as any))}`}</span>
      </div>
    </Link>
  )
}
