import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Education from './pages/Education/Education'
import Header from './pages/Header/Header'
import Main from './pages/Main/Main'
import Project from './pages/Project/Project'
import Resume from './pages/Resume/Resume'

function App() {

	return (
		<>
			<Header></Header>
			<Main></Main>
			<About />
			<Education />
			<Project />
			<Resume />	
			<Contact />
		</>
	)
}

export default App
