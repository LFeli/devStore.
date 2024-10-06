export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <h1 className="text-xl font-bold text-zinc-800">Hello World for search</h1>
  )
}
