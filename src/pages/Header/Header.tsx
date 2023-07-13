import { useState } from "react"
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { BsBriefcase, BsColumnsGap } from 'react-icons/bs'
import { GrCircleInformation } from 'react-icons/gr'
import Tooltip from "../../components/Tooltip/Tooltip"
const Header = () => {

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	}

	const menu = [
		{
			path: "main",
			icon: AiOutlineHome
		},
		{
			path: "about",
			icon: GrCircleInformation
		},
		{
			path: "education",
			icon: BsBriefcase
		},
		{
			path: "project",
			icon: BsColumnsGap
		},
		{
			path: "resume",
			icon: AiOutlineUser
		}, {
			path: "contact",
			icon: AiOutlineMail
		}
	]
	return (
		<div>
			<AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
			{
				nav ? (
					<div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
						{menu.map((item) => (
							<a href={`#${item.path}`} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
								<item.icon size={20} />
								<span className="pl-4 first-letter:uppercase">{`${item.path}`}</span>
							</a>
						))}
					</div>
				) : (
					<div className="md:block hidden fixed top-[25%] z-10">
						<div className="flex flex-col ">
							{menu.map((item) => (
								<Tooltip text={item.path}>
									<a href={`#${item.path}`} className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-xl">
										<item.icon size={20} />
									</a>
								</Tooltip>
							))}
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Header