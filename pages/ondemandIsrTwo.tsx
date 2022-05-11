import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { fetchData } from '../lib/fetch-data'

const ondemandIsrTwo = ({ data }: any) => {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            日時：{data.date}
          </h1>
        </div>
        <Image
          src={data.img}
          width={500}
          height={500}
          objectFit="contain"
          alt="mugiwara-pirates"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
            {data.role} {data.name}
          </h2>
          <h3 className="title-font sm:text-2xl text-xl font-medium text-gray-900">
            懸賞金 {data.berry} ベリー
          </h3>
        </div>
      </div>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    const data = await fetchData()
    return {
      props: {
        data,
      },
    }
  } else {
    // 開発環境
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()
    return {
      props: {
        data,
      },
    }
  }
}

export default ondemandIsrTwo
