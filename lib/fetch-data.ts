export const fetchData = async() => {
	const res = await fetch(
		'https://next-data-fetching-sample.vercel.app/api/mugiwara'
  )
	const data = await res.json()
	return data
}
