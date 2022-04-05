import type { NextPage } from 'next'
import { FetchData } from '../components/FetchData'

const Csr: NextPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <FetchData />
    </section>
  )
}

export default Csr
