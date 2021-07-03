import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {

	const [show, setShow] = useState(false)

	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<img className='logo' src='../../assets/Logo_White.png' alt='logo' />
				</Link>
				<div className='searchToggle'>
					{show ? <input
						className='searchInput'
						type='text'
						placeholder='Search all News'
					/> : null}
					<img onClick={() => setShow(!show)}
						className='searchIcon'
						src='../../assets/search-icon@2x.svg'
						alt=''
					/>
					<span className='white-border'></span>
				</div>
			</div>
		</div>
	)
}

export default Header
