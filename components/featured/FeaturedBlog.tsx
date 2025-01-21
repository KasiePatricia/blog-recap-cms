import ExportedImage from "next-image-export-optimizer";

// Define the picked properties type
export type PickedBlogPost = {
  featured?: boolean;
  title: string;
  date?: string;
  slug: string;
  image: string;
  author?: string;
  description?: string;
  id: string;
  raw: string;
  type: string;
  templateKey: string;
  body: any;
};

const FeaturedBlogPost = ({ post }: { post: PickedBlogPost }) => {
  return (
    <div className="rounded-[3rem] p-[2rem] bg-white mt-[3rem]">
      <div className="h-[47rem] w-full rounde-md">
        <ExportedImage
          src={post?.image || "/media/blog-1.svg"}
          alt={`${post?.title} image`}
          width={100}
          height={100}
          className="object-fit w-full rounded-md h-[47rem]"
          placeholder="blur"
        />
      </div>
      <div className="grid gap-[1rem] mt-[4rem]">
        <p className="text-[#1A1A1A] font-medium text-[3.6rem] leading-[4.5rem]">
          {post?.title || ""}
        </p>
        <p className="text-[#1A1A1A] font-medium text-[1.6rem] leading-[2.5rem] max-w-[90rem]">
          {post?.description || ""}
        </p>
        <div className="flex gap-2 items-center mt-[1.5rem]">
          <div className="bg-[#F6F6F9] h-[2.2rem] w-[2.2rem] rounded-full"></div>
          <p className="text-[#666666] font-medium text-[1.3rem] leading-[1.9rem]">
            {post?.author?.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogPost;