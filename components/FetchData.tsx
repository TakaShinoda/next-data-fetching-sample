// TODO: data fetch with swr
import React, { useEffect, useState, VFC } from 'react'
import Image from 'next/image'

export const FetchData: VFC = () => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    try {
      fetch('api/hello')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
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
    </div>
  )
}
