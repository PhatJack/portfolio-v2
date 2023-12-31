import { TypeAnimation } from "react-type-animation"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { AiOutlinePhone } from "react-icons/ai"
import { useThemeContext } from "../../hook/useThemeContext";
import Background from "../../assets/background.jpg"
const Main = () => {
	
	const { themeColor } = useThemeContext();

	return (
		<div id="main">
			<img className="w-full h-screen object-cover object-left scale-x-[-1]" src={Background} alt="" />
			<div className="w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-black/80">
				<div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center">
					<h1 className="sm:text-5xl text-4xl font-bold text-gray-800 dark:text-white">I'm Jack Phat</h1>
					<h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-white">
						I'm a
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								'Front-end Developer',
								1500, // wait 1s before replacing "Mice" with "Hamsters"
								'Designer',
								1500,
								'Dream Chaser',
								1500,
								'Coder',
								1500
							]}
							wrapper="span"
							speed={40}
							style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
							repeat={Infinity}
						/>
					</h2>
					<div className="flex justify-between pt-6 max-w-[200px] w-full">
						<FaFacebook size={20} className="cursor-pointer hover:text-blue-600 transition-all dark:text-white dark:hover:text-blue-600" />
						<FaInstagram size={20} className="cursor-pointer hover:text-pink-600 transition-all dark:text-white dark:hover:text-pink-600 " />
						<FaGithub size={20} className="cursor-pointer hover:text-gray-700 transition-all dark:text-white dark:hover:text-white" />
						<FaLinkedin size={20} className="cursor-pointer hover:text-blue-500 transition-all dark:text-white dark:hover:text-blue-500" />
					</div>
					<div className="flex justify-between md:items-start items-center flex-col my-4">
						<div className={`flex justify-center items-center gap-2 bg-${themeColor} text-white px-5 py-3 my-2 rounded-lg hover:bg-${themeColor}/50 transition-all dark:bg-white dark:text-black`}>
							<a href="mailto:tienphatng.693@gmail.com"><BiMailSend size={22} /></a>
							<a href="mailto:tienphatng.693@gmail.com" className="text-md">tienphatng.693@gmail.com</a>
						</div>
						<div className={`flex justify-center items-center gap-2 bg-${themeColor} text-white px-5 py-3 my-2 rounded-lg hover:bg-${themeColor}/50 transition-all  dark:bg-white dark:text-black`}>
							<a href="tel:+84344248396"><AiOutlinePhone size={22} /> </a>
							<a href="tel:+84344248396" className="text-md">(+84) 0344248396</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Main