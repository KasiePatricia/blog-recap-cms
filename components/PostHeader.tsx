import Link from 'next/link'
import {
  Blog,
  Business,
  News,
  Products,
} from '../.contentlayer/generated'
import { formatDate } from '../utils'

export default function PostHeader({
  data,
}: {
  data: Blog | Business | News | Products
}) {
  return (
    <>
      <header className="flex flex-col gap-4 sm:gap-6">
        <div className="flex items-center flex-col gap-[5rem]">
          <div className="flex items-center gap-[1.3rem] mt-auto">
            <span className="text-[2rem] leading-[2.2rem] text-[#1a1a1a] font-medium">CIRCLE ARTICLE</span>
            <span className="w-[0.8rem] h-[0.8rem] rounded-full bg-[#9e9e9e]"></span>
            <span className="text-[1.5rem] leading-[2.2rem] font-medium text-[#9e9e9e] ">{`${formatDate(new Date(data.date as any))}`}</span>
          </div>
          <h1 className="text-[4.5rem] leading-[5.4rem] text-[#1a1a1a] font-medium text-center">
            {data.title}
          </h1>
        </div>
      </header>
    </>
  )
}
