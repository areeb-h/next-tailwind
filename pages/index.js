import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-sans mx-auto max-w-5xl">
      <Head>
        <title>App nre</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div className="mx-4 my-4 rounded-xl bg-white">
        <div className="px-4 py-4 flex">
          <img className="w-40" src="/images/hss.svg" alt="" />
          <div className="flex flex-col justify-between ml-5">
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
            <div className="self-end">
              <Link href='/about' className="cursor-pointer">
                <a className="text-green-700 inline-block align-bottom rounded-xl bg-green-100 px-4 py-1 hover:bg-opacity-60">Read More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
