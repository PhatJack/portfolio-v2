import EducationItem from "./EducationItem"
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'

import { useThemeContext } from "../../hook/useThemeContext";

const data = [
	{
		year: "2021-Present",
		title: 'SGU University',
		duration: "4.5 Years",
		detail: "Excepteur excepteur mollit nisi ex laborum nostrud voluptate.Exercitation id nisi et do quis proident mollit est minim nostrud aliqua sunt."
	},
	{
		year: "2023",
		title: 'The Leafy Liberties',
		duration: "3 Months",
		detail: "Developed a PHP-based bookstore project using the MVC architecture. This project involved designing and implementing a scalable and efficient web application for managing bookstore operations."
	},
	{
		year: "2022",
		title: ' 4 Legends Barber',
		duration: "3 Months",
		detail: "Created an e-commerce store with a frontend implemented using pure CSS, HTML, and JavaScript. Users can browse and purchase products, with the ability to save data locally using localStorage."
	},
	{
		year: "2022",
		title: 'Student Management System',
		duration: "3 Months",
		detail: "Developed a Java-based application for managing food and drink orders. The system provides functionalities for users, salespersons, and managers to view products, manage user information, create invoices, and perform various management tasks."
	},
]

const Education = () => {

	useEffect(() => {
		AOS.init();
	}, []);

	const { themeColor } = useThemeContext();

	return (
		<div id="education" className="wrap-container">
			<h1
				className={`h1-text-custom text-${themeColor}`}
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