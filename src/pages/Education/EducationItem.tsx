import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { useThemeContext } from "../../hook/useThemeContext";


const EducationItem = ({ year, title, duration, details }: { year: string, title: string, duration: string, details: string }) => {

	useEffect(() => {
		AOS.init();
	}, []);
	
	const { themeColor } = useThemeContext();


	return (
		<ol className="flex flex-col md:flex-row relative border-l border-stone-200">
			<li className="mb-10 ml-4" data-aos="fade-up" data-aos-easing="linear"
				data-aos-duration="1000">
				<div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-[22px] border-white" />
				<p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
					<span className={`inline-block px-2 py-1 font-semibold text-white bg-${themeColor} rounded-md dark:bg-white dark:text-black`}>{year}</span>
					<span className={`text-lg font-semibold text-${themeColor} dark:text-white`}>{title}</span>
					<span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span>
				</p>
				<p className="my-2 text-base font-normal text-stone-500">{details}</p>
			</li>
		</ol>
	)
}

export default EducationItem