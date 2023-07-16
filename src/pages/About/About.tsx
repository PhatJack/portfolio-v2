import avatar from '../../assets/avatar.jpg'
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react'


const About = () => {

	useEffect(() => {
		AOS.init();
	}, []);


	const isMobile = window.innerWidth >= 920;

	return (
		<div className="wrap-container" id='about'>
			<h1 className="h1-text-custom" data-aos="fade-up" data-aos-easing="linear"
				data-aos-duration="500">About Me</h1>
			<div className="flex lg:gap-20 md:gap-14 gap-8 justify-between items-center lg:flex-row flex-col">
				<div className="shadow-custom border-gray-200 overflow-hidden border-[8px] dark:shadow-lg dark:shadow-white" data-aos="fade-up" data-aos-easing="linear"
					data-aos-duration="800">
					<img src={avatar} alt="" className='w-full h-full object-cover' />
				</div>
				<div className="flex flex-col gap-10">
					<strong
						data-aos="fade-up" data-aos-easing="linear"
						data-aos-duration="1200"
						className={`text-5xl leading-tight text-center lg:text-left text-black dark:text-white ${isMobile ? 'break-words' : ''} lg:w-64 w-full`}>
						Hello I'm Jack Phat
					</strong>
					<p
						data-aos="fade-up" data-aos-easing="linear"
						data-aos-duration="1300"
						className='text-lg tracking-wide font-medium text-gray-500'>
						From a modest beginning, I embraced design with passion and relentless dedication. Despite a slower start, I pushed myself to work harder, continuously striving for improvement.
					</p>
					<p
						data-aos="fade-up" data-aos-easing="linear"
						data-aos-duration="1600"
						className='text-lg font-medium text-gray-500'>
						Fuelled by creativity, I aim to leave a lasting impact through my work, exceeding expectations along the way. My unwavering passion propels me forward on this design journey, shaping me into the designer I am today.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About;
