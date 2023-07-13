import pdf from '../../assets/cv.pdf'
import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
const Resume = () => {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);


	return (
		<div className="wrap-container" id="resume">
			<h1 className="h1-text-custom">Resume</h1>
			<Document file={pdf} className="flex justify-center items-center">
				<Page pageNumber={1} scale={width > 920 ? 1.6 : 1.1} />
			</Document>
			<div className="flex justify-center items-center my-8">
				<a href={pdf} download className='px-5 py-2 border-2 border-[#001b5e] text-[#001b5e] rounded-md transition-all hover:bg-[#001b5e] hover:text-white font-semibold '>
					Download CV
				</a>
			</div>
		</div>
	)
}

export default Resume