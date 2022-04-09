import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		// 再検証させるページの path を引数に渡す
		await res.unstable_revalidate('/ondemandIsr')
		return res.json({ revalidate: true })
	} catch(err) {
		console.log(err)
		return res.status(500).send('Error revalidating')
  }
}