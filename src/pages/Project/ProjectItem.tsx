import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'


const ProjectItem = ({ img, title }: { img: string, title: string }) => {

	useEffect(() => {
		AOS.init();
	}, []);

	return (

		<div
			data-aos="flip-up"
			data-aos-easing="ease-in"
			data-aos-duration="800"
			className="relative flex-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] transition-all">
			<img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
			<div className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 ease-linear">
				<h3 className="text-2xl font-bold text-white tracking-wider text-center">
					{title}
				</h3>
				<p className="pb-4 pt-2 text-white text-center">
					React JS & Typescript
				</p>
				<a href="/">
					<p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
						Demo
					</p>
				</a>
			</div>
		</div>
	)
}

export default ProjectItem