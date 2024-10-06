import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="duration-400 transition-transform group-hover:scale-105"
          src="/moletom-never-stop-learning.png"
          alt="sweatshirt never stop learning by Rocketseat"
          title="Sweatshirt Never Stop Learning"
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[400px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span
            className="truncate text-sm"
            title="Sweatshirt Never Stop Learning"
          >
            Sweatshirt Never Stop Learning
          </span>
          <span className="flex h-full shrink-0 items-center justify-center rounded-full bg-violet-500 px-5">
            R$ 129,90
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="duration-400 transition-transform group-hover:scale-105"
          src="/moletom-java.png"
          alt="Sweatshirt Coffee is All You Need by Rocketseat"
          title="Sweatshirt Coffee is All You Need"
          width={500}
          height={500}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[320px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span
            className="truncate text-sm"
            title="Sweatshirt Coffee is All You Need"
          >
            Sweatshirt Coffee is All You Need
          </span>
          <span className="flex h-full shrink-0 items-center justify-center rounded-full bg-violet-500 px-5">
            R$ 129,90
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="duration-400 transition-transform group-hover:scale-105"
          src="/camiseta-dowhile-2022.png"
          alt="Sweatshirt Expand Your Mind DoWhile 2022 by Rocketseat"
          title="Sweatshirt Expand Your Mind DoWhile 2022"
          width={500}
          height={500}
          quality={100}
        />

        <div className="absolute bottom-10 right-10 flex h-12 max-w-[320px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span
            className="truncate text-sm"
            title="Sweatshirt Expand Your Mind DoWhile 2022"
          >
            Sweatshirt Expand Your Mind DoWhile 2022
          </span>
          <span className="flex h-full shrink-0 items-center justify-center rounded-full bg-violet-500 px-5">
            R$ 129,90
          </span>
        </div>
      </Link>
    </div>
  )
}
