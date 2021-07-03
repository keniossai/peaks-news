import React from 'react'
import './Home.scss'
import Menu from './Menu'
import News from './News'

function Home({data}) {
	return (
		<>
			<Menu />
            <div className='container'>
			<div className='wrapper'>
				<div className='module1 box'>
					<div className='patarn'>
						<h1 className='title'>
							Australia Covid live update: NSW announces coronavirus lockdown
							for Greater Sydney, Blue Mountains, Central Coast and Wollongong
							from 6pm today
						</h1>
					</div>
				</div>
				<div className='module2 box'>
					<div className='patarn2'>
						<h1>
							Sajid Javid appointed health secretary after Matt Hancock resigns
						</h1>
					</div>
				</div>
				<div className='module3 box'>
					<div className='patarn3'>
						<h1>
							Vaccine hesitancy wanes despite thousands joining ‘Freedom March’
						</h1>
					</div>
				</div>
				<div className='module4 box'>
					<div className='patarn4'>
						<h1>
							Gareth Southgate must combat Germany’s agents of chaos – but
							first, pick a shape
						</h1>
					</div>
				</div>
				<div className='module5 box'>
					<div className='patarn5'>
						<h1>
							Stephan Lewies and Alex Dombrandt jointly hoist the trophy high
						</h1>
					</div>
				</div>
			</div>
            <h1>{data?.name}</h1>
		</div>
            <News />
        </>

	)
}

export default Home
