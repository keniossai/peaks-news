import React from 'react'
import './Option.scss'
import { Link } from 'react-router-dom'

function Option() {
	return (
		<div className='subHeader'>
			<h1 className='subHeadTitle'>Top Stories</h1>
			<div className='newsOption'>
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
	)
}

export default Option
