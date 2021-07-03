import './App.scss'
import Home from './Home'
// import Option from './Option'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookMarks from './BookMarks'
import SingleNews from './SingleNews'

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/bookmark' component={BookMarks} />
					<Route path='/singlenews' component={SingleNews} title='Search Result' />
          
				</Switch>
			</div>
		</Router>
	)
}

export default App
