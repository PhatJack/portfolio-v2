import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Education from './pages/Education/Education'
import Header from './pages/Header/Header'
import Main from './pages/Main/Main'
import Project from './pages/Project/Project'

function App() {

	return (
		<>
			<Header></Header>
			<Main></Main>
			<About />
			<Education />
			<Project />
			<Contact />
		</>
	)
}

export default App
