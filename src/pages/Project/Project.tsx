import ProjectItem from "./ProjectItem"
import demo from '../../assets/demo.png'
import demo2 from '../../assets/demo2.png'
import demo3 from '../../assets/demo3.png'
import demo4 from '../../assets/demo4.jpg'

import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Project = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	const items = [
		{
			img: demo,
			title: "The Leafy Liberties",
			languages: "HTML, Tailwind CSS, MySQL, Docker and Javascript"
		},
		{
			img: demo2,
			title: "Student Management System",
			languages: "java, MySQL and Java Swing"
		},
		{
			img: demo3,
			title: "5 Legends Barber",
			languages: "HTML, CSS and Javascript"
		},
		{
			img: demo4,
			title: "Skateboard Shopping",
			languages: "ReactJS, Tailwind CSS, Docker"
		}
	]

	return (
		<div id="project" className="wrap-container">
			<h1 className="h1-text-custom"
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="500">Projects</h1>
			<div className="grid sm:grid-cols-2 gap-12">
				{items.map((item,index) => (
					<ProjectItem img={item.img} title={item.title} language={item.languages} key={index} />
				))}
				{/* <ProjectItem img={demo} title={"The Leafy Liberties"} language={""} />
				<ProjectItem img={demo2} title={"Student Management System"} language={""} />
				<ProjectItem img={demo3} title={"4 Legends Barber"} language={""} />
				<ProjectItem img={demo4} title={"Skateboard Shopping"} language={""} /> */}
			</div>
		</div>
	)
}

export default Project