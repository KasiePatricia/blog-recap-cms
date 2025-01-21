import Link from 'next/link'

export const tagClasses =
  'py-2 px-3 bg-slate-200 hover:bg-slate-700 hover:text-slate-100 rounded-sm font-mono text-sm transition-colors'

export default function Tag({ tag }: { tag: string }) {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}/`}
      className={tagClasses}
      title={`See all posts for "${tag}" tag`}
    >
      #{tag}
    </Link>
  )
}
