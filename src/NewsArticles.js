import React from 'react'
import './NewsArticles.scss'
import { Link } from 'react-router-dom'

function NewsArticles({ data }) {
	return (
		<div className='module-grid'>
			<div
				className='grid1'
				style={{
					backgroundPosition: 'center center',
					width: '100%',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundImage: `url(${data?.urlToImage})`,
				}}
			>
				<Link to='/singlenews'>
					<div className='patarn'>
						<h1 className='title'>{data?.title}</h1>
						<p>{data?.content}</p>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default NewsArticles
