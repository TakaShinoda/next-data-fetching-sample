import type { NextPage } from 'next'
import Link from 'next/link'

const Custom404: NextPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
            <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">
              Error 404
            </p>
            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
              Page not found
            </h1>

            <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
              The page you’re looking for doesn’t exist.
            </p>
            <Link href="/">
              <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Go home
              </a>
            </Link>
          </div>

          <div className="h-80 md:h-auto overflow-hidden rounded-lg relative">
            <img
              src="https://3.bp.blogspot.com/-Ml2DT77qxNk/WsiRuwuwAAI/AAAAAAABLIw/EdyR2igaIbY-LjuJ5_w7MLScO-Zc-eB2gCLcBGAs/s400/character_mezamashidokei.png"
              loading="lazy"
              alt="sample"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Custom404
