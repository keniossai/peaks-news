import React from 'react'
import './Options.scss'
import { Link } from 'react-router-dom'

function subMenu() {
	return (
		<>
			<div className='homeHeader'>
				<h1 className='headerTitle'>Top Stories</h1>
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
		</>
	)
}

export default subMenu
