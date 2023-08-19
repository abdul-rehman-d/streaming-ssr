import Link from 'next/link'
import { Suspense } from 'react'

function Sidebar() {
  return (
    <aside className="w-3/12 bg-black bg-opacity-50 flex flex-col sticky top-0 h-screen left-0">
        <div className="flex-grow flex justify-center items-center" style={{ fontSize: "3vw" }}>
          <div className="text-center">Streaming SSR Demo</div>
        </div>
        <footer>
          <p className="text-center">
            <span>by </span>
            <a href="https://abdulrehmandev.me/" className="underline">Abdul Rehman</a>
          </p>
        </footer>
      </aside>
  )
}

function Navbar () {
  return (
    <nav className="bg-black bg-opacity-20 py-2 px-8 m-2 rounded-2xl">
    <ul className="flex flex-row gap-2">
      <li><Link href="/" className='underline hover:text-white'>Home</Link></li>
    </ul>
  </nav>
  )
}

const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function Item({
  humanIdx,
  idx
} : {
  humanIdx: number;
  idx: number;
}) {
  await delay(idx * 1000)

  return (
    <div className='flex flex-col'>
      <span>item {humanIdx}</span>
      <span>{`${idx * 1000}ms`}</span>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-[100svh]">
      <Sidebar />
      <div className="w-9/12 flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col justify-center">
          <div className="flex flex-row flex-wrap justify-center gap-2">
            {Array(10).fill(0).map((_, i) => (
              <div
                className="flex flex-col justify-center items-center w-32 h-32 bg-gray-200 bg-opacity-30 rounded-lg"
                key={`item-${i}`}
              >
                <Suspense fallback={<div>loading...</div>}>
                  <Item humanIdx={i+1} idx={i} />
                </Suspense>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
