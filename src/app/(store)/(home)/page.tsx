import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')

  const products = await response.json()

  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid-rows-6 grid max-h-[860px] grid-cols-9 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          className="duration-400 transition-transform group-hover:scale-105"
          src={highlightedProduct.image}
          alt={`${highlightedProduct.title} by Rocketseat`}
          title={highlightedProduct.title}
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[400px] items-center gap-4 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span
            className="truncate text-sm"
            title="Sweatshirt Never Stop Learning"
          >
            {highlightedProduct.title}
          </span>
          <span className="flex h-full shrink-0 items-center justify-center rounded-full bg-violet-500 px-4">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex items-start justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              className="duration-400 transition-transform group-hover:scale-105"
              src={product.image}
              alt={`${product.title} by Rocketseat`}
              title={product.title}
              width={500}
              height={500}
              quality={100}
            />

            <div className="absolute bottom-8 right-8 flex h-12 max-w-[320px] items-center gap-4 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span
                className="truncate text-sm"
                title="Sweatshirt Never Stop Learning"
              >
                {product.title}
              </span>
              <span className="flex h-full shrink-0 items-center justify-center rounded-full bg-violet-500 px-4">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
