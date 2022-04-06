import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

const Sg = ({ data }: any) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          src={data.img}
          width={500}
          height={500}
          objectFit="contain"
          alt="mugiwara-pirates"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {data.date}
          </h1>
        </div>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    // 本番環境
    const res = await fetch(
      'https://next-data-fetching-sample.vercel.app/api/hello'
    )
    const data = await res.json()
    return { props: { data } }
  } else {
    // 開発環境
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()
    return { props: { data } }
  }
}

export default Sg
