// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string
  img: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // 日時設定
  const date = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' } as any)

  // 画像はランダムに返す
  let img = ''
  let num = Math.floor(Math.random() * 10)
  
  switch(num) {
    case 0:
      img = 'https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png'
      break;
    case 1:
      img = 'https://1.bp.blogspot.com/-rzRcgoXDqEg/YAOTCKoCpPI/AAAAAAABdOI/5Bl3_zhOxm07TUGzW8_83cXMOT9yy1VJwCNcBGAsYHQ/s400/onepiece02_zoro_bandana.png'
      break;
    case 2:
      img = 'https://1.bp.blogspot.com/-2ut_UQv3iss/X-Fcs_0oAII/AAAAAAABdD8/jrCZTd_xK-Y6CP1KwOtT_LpEpjp-1nvxgCNcBGAsYHQ/s400/onepiece03_nami.png'
      break;
    case 3:
      img = 'https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s400/onepiece04_usopp_sogeking.png'
      break;
    case 4:
      img = 'https://1.bp.blogspot.com/-HPG_x7XPky8/X-FctLTLkKI/AAAAAAABdEE/xs4T8m0FiBAFptXHGQhQ2c9ZmVWtaeQSgCNcBGAsYHQ/s400/onepiece05_sanji.png'
      break;
    case 5:
      img = 'https://1.bp.blogspot.com/--9Rl2O4BBN0/X-Fct8K5mqI/AAAAAAABdEI/yLOziAqJO34fwn73AolVP0e42A2h-ql1QCNcBGAsYHQ/s400/onepiece06_chopper.png'
      break;
    case 6:
      img = 'https://1.bp.blogspot.com/-JiNpsjnPn7g/X-FcuWcU37I/AAAAAAABdEQ/P5r3wBMTRegjl7njCk4zWBkdoay44-T2gCNcBGAsYHQ/s400/onepiece07_robin.png'
      break;
    case 7:
      img = 'https://1.bp.blogspot.com/-H8YBA_SpxGs/X-Fcu75hh_I/AAAAAAABdEU/WRKUa03ypYor3TwvhziHAnSEcTN4Noq0gCNcBGAsYHQ/s400/onepiece08_franky.png'
      break;
    case 8:
      img = 'https://1.bp.blogspot.com/-KZ0MJgiPJHo/X__CLeY-zVI/AAAAAAABdNM/HnFYqUe0VQEzCWCqyMggibpk4kBRtFCpQCNcBGAsYHQ/s400/onepiece09_brook.png'
      break;
    case 9:
      img = 'https://1.bp.blogspot.com/-vIXZ3_KMn9g/X-FcvVKPQSI/AAAAAAABdEc/i8oJKU0UDMM2uQfzemn6oOmJLICo4VcVgCNcBGAsYHQ/s400/onepiece10_jinbe.png'
      break;
  }
  res.status(200).json({ date, img })
}
