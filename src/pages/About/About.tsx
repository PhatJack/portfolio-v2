import avatar from '../../assets/avatar.jpg'

const About = () => {
	return (
		<div className="wrap-container" id='about'>
			<h1 className="h1-text-custom">About Me</h1>
			<div className="flex gap-20">
				<div className="shadow-custom border-gray-200 overflow-hidden border-[8px]">
					<img src={avatar} alt="" className='w-full h-full object-contain' />
				</div>
				<div className="flex flex-col gap-10">
					<strong className='text-5xl leading-tight'>Hello I'm <br /> Jack Phat</strong>
					<p className='text-lg tracking-wide font-medium text-gray-500'>
						From a modest beginning, I embraced design with passion and relentless dedication. Despite a slower start, I pushed myself to work harder, continuously striving for improvement.
					</p>
					<p className='text-lg font-medium text-gray-500'>
						Fuelled by creativity, I aim to leave a lasting impact through my work, exceeding expectations along the way. My unwavering passion propels me forward on this design journey, shaping me into the designer I am today.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About