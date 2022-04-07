// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string
  name: string
  img: string
  berry: string
  role: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // 日時設定
  const date = new Intl.DateTimeFormat('ja-JP', {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Asia/Tokyo"}).format(new Date())

  // ランダムに返す
  const num = Math.floor(Math.random() * 10)

  let name = ''
  let img = ''
  let berry = ''
  let role = ''
  
  switch(num) {
    case 0:
      name = 'モンキー・D・ルフィ'
      img = 'https://1.bp.blogspot.com/-tVeC6En4e_E/X96mhDTzJNI/AAAAAAABdBo/jlD_jvZvMuk3qUcNjA_XORrA4w3lhPkdQCNcBGAsYHQ/s400/onepiece01_luffy.png'
      berry = '15億'
      role = '船長'
      break;
    case 1:
      name = 'ロロノア・ゾロ'
      img = 'https://1.bp.blogspot.com/-rzRcgoXDqEg/YAOTCKoCpPI/AAAAAAABdOI/5Bl3_zhOxm07TUGzW8_83cXMOT9yy1VJwCNcBGAsYHQ/s400/onepiece02_zoro_bandana.png'
      berry = '3億2000万'
      role = '戦闘員(剣士)'
      break;
    case 2:
      name = 'ナミ'
      img = 'https://1.bp.blogspot.com/-2ut_UQv3iss/X-Fcs_0oAII/AAAAAAABdD8/jrCZTd_xK-Y6CP1KwOtT_LpEpjp-1nvxgCNcBGAsYHQ/s400/onepiece03_nami.png'
      berry = '6600万'
      role = '航海士'
      break;
    case 3:
      name = 'ウソップ'
      img = 'https://1.bp.blogspot.com/-mZpzgXC1Sxk/YAOTCAKwWTI/AAAAAAABdOM/5B4hXli0KLU5N-BySHgjVbhZscKLSE-bQCNcBGAsYHQ/s400/onepiece04_usopp_sogeking.png'
      berry = '2億'
      role = '狙撃手'
      break;
    case 4:
      name = 'ヴィンスモーク・サンジ'
      img = 'https://1.bp.blogspot.com/-HPG_x7XPky8/X-FctLTLkKI/AAAAAAABdEE/xs4T8m0FiBAFptXHGQhQ2c9ZmVWtaeQSgCNcBGAsYHQ/s400/onepiece05_sanji.png'
      berry = '3億3000万'
      role = 'コック'
      break;
    case 5:
      name = 'トニートニー・チョッパー'
      img = 'https://1.bp.blogspot.com/--9Rl2O4BBN0/X-Fct8K5mqI/AAAAAAABdEI/yLOziAqJO34fwn73AolVP0e42A2h-ql1QCNcBGAsYHQ/s400/onepiece06_chopper.png'
      berry = '100'
      role = '船医'
      break;
    case 6:
      name = 'ニコ・ロビン'
      img = 'https://1.bp.blogspot.com/-JiNpsjnPn7g/X-FcuWcU37I/AAAAAAABdEQ/P5r3wBMTRegjl7njCk4zWBkdoay44-T2gCNcBGAsYHQ/s400/onepiece07_robin.png'
      berry = '1億3000万'
      role = '考古学者'
      break;
    case 7:
      name = 'フランキー'
      img = 'https://1.bp.blogspot.com/-H8YBA_SpxGs/X-Fcu75hh_I/AAAAAAABdEU/WRKUa03ypYor3TwvhziHAnSEcTN4Noq0gCNcBGAsYHQ/s400/onepiece08_franky.png'
      berry = '9400万'
      role = '船大工'
      break;
    case 8:
      name = 'ブルック'
      img = 'https://1.bp.blogspot.com/-KZ0MJgiPJHo/X__CLeY-zVI/AAAAAAABdNM/HnFYqUe0VQEzCWCqyMggibpk4kBRtFCpQCNcBGAsYHQ/s400/onepiece09_brook.png'
      berry = '8300万'
      role = '音楽家'
      break;
    case 9:
      name = 'ジンベエ'
      img = 'https://1.bp.blogspot.com/-vIXZ3_KMn9g/X-FcvVKPQSI/AAAAAAABdEc/i8oJKU0UDMM2uQfzemn6oOmJLICo4VcVgCNcBGAsYHQ/s400/onepiece10_jinbe.png'
      berry = '4億3800万'
      role = '操舵手'
      break;
  }
  res.status(200).json({ date, name, img, berry, role })
}
