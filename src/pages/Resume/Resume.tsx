import pdf from '../../assets/cv.pdf'
import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import AOS from 'aos'
import "aos/dist/aos.css";
import { useThemeContext } from "../../hook/useThemeContext";


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const Resume = () => {
	const [width, setWidth] = useState(1200);
	
	
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);
	
	useEffect(() => {
		AOS.init();
	}, []);
	
	const { themeColor } = useThemeContext();


	return (
		<div className="wrap-container" id="resume">
			<h1 className={`h1-text-custom text-${themeColor}`}
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="500">Resume</h1>
			<div data-aos="fade-up"
				data-aos-easing="ease-in"
				data-aos-duration="1000">
				<Document file={pdf} className="justify-center items-center lg:flex hidden">
					<Page pageNumber={1} scale={width > 920 ? 1.6 : 1.1} renderTextLayer={false} />
				</Document>
			</div>
			<div className="flex justify-center items-center my-8"
				data-aos="fade-up"
				data-aos-easing="ease-in"
				data-aos-duration="1400"
			>
				<a href={pdf} download className={`px-5 py-2 border-2 border-${themeColor} text-${themeColor} rounded-md transition-all hover:bg-${themeColor} hover:text-white font-semibold dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black`}>
					Download CV
				</a>
			</div>
		</div>
	)
}

export default Resume