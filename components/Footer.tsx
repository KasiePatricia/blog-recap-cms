import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container mx-auto mt-[10.2rem] px-6 xl:px-0">
      <div className="flex flex-col md:flex-row gap-[6.4rem]">
        <div>
          <div className="mb-6">
            <ExportedImage
              src="/media/blue-logo.svg"
              alt="Logo"
              width={100}
              height={36}
              placeholder="blur"
            />
          </div>
          <p className="text-grey max-w-[32rem] pt-3 text-[1.8rem]">
            The only customer engagement and marketing tool you will ever need
          </p>
        </div>
        <div className="flex flex-col gap-[1.2rem] md:ml-auto">
          <h3 className="font-[700] leading-[20px] text-[#3c3c3c] pb-[4px] md:pr-[7.6rem] text-[1.4rem]">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-[1.2rem]">
            <li>
              <a
                href="#"
                className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href={"https://www.circlehq.co/privacy-policy"}
                className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://www.circlehq.co/terms-of-use"
                className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="font-[700] leading-[20px] text-[1.4rem] text-[#3c3c3c] pb-[4px] md:pr-[155px]">
            Address
          </h3>
          <p className="font-[450] leading-[2.4rem] text-[#3c3c3c] max-w-[200px] text-[1.6rem]">
            131 Continental Drive, Suite 305 Newark, DE 19713
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="font-[700] leading-[20px] text-[1.4rem] text-[#3c3c3c] pb-[4px]">
            Social
          </h3>
          <Link
            href={"https://www.facebook.com/profile.php?id=61559573608558"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            Facebook
          </Link>
          <Link
            href={"http://www.instagram.com/circlexhq"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            Instagram
          </Link>
          <Link
            href={"https://www.linkedin.com/company/circlehq/"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            LinkedIn
          </Link>
          <Link
            href={"https://x.com/CirclexHq"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            X
          </Link>
          <Link
            href={"#"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            adekorede.adeyemi@circlehq.co
          </Link>
          <Link
            href={"#"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            sales@circlehq.co
          </Link>
          <Link
            href={"#"}
            target="_blank"
            className="font-[450] leading-[2.4rem] text-[#3c3c3c] text-[1.6rem]"
          >
            +4915753557160
          </Link>
        </div>
      </div>

      <div>
        <div className="h-[1px] bg-[#e4e7ec] w-full  mb-[37px] mt-[81px]"></div>
        <div className="flex flex-col md:flex-row justify-between mb-[73px]">
          <h2 className="text-[#98A2B3] text-[1.6rem] font-[400] leading-[2.4rem]">
            © {new Date().getFullYear()} Circlehq. All rights reserved.
          </h2>
          <div className="flex flex-row gap-[2.4rem] py-5 md:py-0">
            <Link href={"https://x.com/CirclexHq"} target="_blank">
              <ExportedImage
                src="/media/s-4.svg"
                alt="Logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </Link>
            <Link href={"http://www.instagram.com/circlexhq"} target="_blank">
              <ExportedImage
                src="/media/s-3.svg"
                alt="Logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61559573608558"}
              target="_blank"
            >
              <ExportedImage
                src="/media/s-1.svg"
                alt="Logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/circlehq/"}
              target="_blank"
            >
              <ExportedImage
                src="/media/s-2.svg"
                alt="Logo"
                width={24}
                height={24}
                placeholder="blur"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// scroll to top
// <button
// onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// className="flex items-center gap-2 outline-offset-8 rounded"
// >
// <span>Scroll to Top</span>
// <Icon name="up" className="size-4" />
// </button>