import React, { useState, useEffect } from 'react'
import NewsArticles from './NewsArticles'
import './News.scss'

function News() {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState()

	const API_KEY = '47f157e287704198996b186794b7bfa2'

	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`
		)
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoading(true)
					setData(result)
				},
				(error) => {
					setIsLoading(true)
					setError(error)
				}
			)
	}, [])
	if (error) {
		return <div>Error: {error.message}</div>
	} else if (!isLoading) {
		return <div className='spinner'><img src="../../assets/spinner.gif" alt="" /></div>
	} else {
		return (
			<div className='bookmarks'>
				{data?.articles
					.filter((news, idx) => idx < 6)
					.map((news) => (
						<NewsArticles data={news} key={news.url} />
					))}
			</div>
		)
	}
}

export default News
