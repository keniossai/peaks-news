import React, {useEffect, useState} from 'react'
import NewsArticles from './NewsArticles'
import './NewsArticles.scss'
import { Link } from 'react-router-dom'



function BookMarks({title}){
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

        return(
            <>
                <div className='homeHeader'>
				<h1 className='headerTitle'>Search Result</h1>
				<div className='newOption'>
					<Link to='/bookmark'>
						<button>
							<img
								className='bookmarkIcon'
								src='../../assets/bookmarkon-icon@2x.svg'
								alt=''
							/>
							View Bookmark
						</button>
					</Link>
					<div className='selectOption'>
						<select>
							<option> Newest Stories</option>
							<option> Oldest Stories</option>
							<option> Most Recent</option>
						</select>
					</div>
				</div>
			</div>
            <div className="bookmarks">
                {data?.articles.filter((news, idx) => idx > 0).map((news) => (
					<NewsArticles data={news} key={news.url} />
				))}
            </div>
            </>
        )
    }

}



export default BookMarks