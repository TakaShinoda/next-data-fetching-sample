// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string
  img: string
}

const date = new Date().toLocaleString()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200)
  .json({
    date,
    img: 'https://3.bp.blogspot.com/-Ml2DT77qxNk/WsiRuwuwAAI/AAAAAAABLIw/EdyR2igaIbY-LjuJ5_w7MLScO-Zc-eB2gCLcBGAs/s400/character_mezamashidokei.png'
  })
}
