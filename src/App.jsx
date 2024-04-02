import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import Detail from './assets/pages/Detail'

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/:Id" element={<Detail/>} />
    		</Routes>

			<div className=' footer'>
				<h1 className=' text-center text-white py-5'> Contents credit to the rightful owners </h1>
			</div>
		</>
	)
}

export default App
