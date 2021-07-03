import React from 'react'
import './BookMarks.scss'
import { Link } from 'react-router-dom'

function SingleNews(data) {
	return (
		<div className='singlenews'>
			<Link to='/bookmark'>
				<button>
					<img
						className='bookmarkIcon'
						src='../../assets/bookmarkon-icon@2x.svg'
						alt=''
					/>
					Add to Bookmark
				</button>
			</Link>
			<div className='module1 box'>
				<h1 className='title'>
					Australia Covid live update: NSW announces coronavirus lockdown for
					Greater Sydney, Blue Mountains, Central Coast and Wollongong from 6pm
					today
				</h1>
			</div>
		</div>
	)
}

export default SingleNews
