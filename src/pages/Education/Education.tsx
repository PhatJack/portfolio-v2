import EducationItem from "./EducationItem"
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'
const data = [
	{
		year: "2021-Present",
		title: 'SGU University',
		duration: "4.5 Years",
		detail: "Excepteur excepteur mollit nisi ex laborum nostrud voluptate.Exercitation id nisi et do quis proident mollit est minim nostrud aliqua sunt."
	},
	{
		year: "2021-Present",
		title: 'SGU University',
		duration: "4.5 Years",
		detail: "Excepteur excepteur mollit nisi ex laborum nostrud voluptate.Excepteur culpa dolor ea adipisicing cupidatat ut."
	},
	{
		year: "2021-Present",
		title: 'SGU University',
		duration: "4.5 Years",
		detail: "Excepteur excepteur mollit nisi ex laborum nostrud voluptate.Irure veniam fugiat aliquip id eiusmod aliquip enim dolore labore elit cupidatat esse."
	},
	{
		year: "2021-Present",
		title: 'SGU University',
		duration: "4.5 Years",
		detail: "Excepteur excepteur mollit nisi ex laborum nostrud voluptate.Eiusmod dolore ex eu cupidatat in pariatur cillum."
	},
]

const Education = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="education" className="wrap-container">
			<h1
				className="h1-text-custom"
				data-aos="fade-up" data-aos-easing="linear"
				data-aos-duration="500">Education & Experience</h1>
			{data.map((item, index) => (
				<EducationItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.detail}
				/>
			))}
		</div>
	)
}

export default Education