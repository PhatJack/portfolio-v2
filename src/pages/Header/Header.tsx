import { useState } from "react"
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineUser, AiOutlineClose, AiOutlineSetting } from 'react-icons/ai'
import { BsBriefcase, BsColumnsGap } from 'react-icons/bs'
import { GrCircleInformation } from 'react-icons/gr'
import Tooltip from "../../components/Tooltip/Tooltip"
import { BiMoon, BiSun } from "react-icons/bi"
const Header = () => {

	const [nav, setNav] = useState(false);
	const [settingVisible, setSettingVisible] = useState(false);

	const handleSettingVisible = () => {
		setSettingVisible(!settingVisible);
	}

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
			<div className="fixed top-2 right-2 z-[99] md:hidden w-10 h-10 bg-gray-100 rounded-full shadow-xl cursor-pointer">
				{!nav ?
					<AiOutlineMenu size={25} onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer" />
					:
					<AiOutlineClose size={25} onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer" />
				}
			</div>
			{
				nav ? (
					<div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
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
							{menu.map((item, index) => (
								<Tooltip text={item.path} key={index}>
									<a href={`#${item.path}`} className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
										<item.icon size={20} />
									</a>
								</Tooltip>
							))}
							<Tooltip text="Setting" key={6}>
								<button onClick={handleSettingVisible} className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-xl hidden md:block">
									<AiOutlineSetting size={20} />
								</button>
							</Tooltip>
						</div>
					</div>
				)
			}
			<div className={`w-full h-screen fixed z-[10] bg-gray-300/40 ${settingVisible ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}`} onClick={handleSettingVisible}></div>
			<div className={`bg-gray-800 w-[70%] h-screen fixed z-[10] !visible transition-all bottom-0 duration-300 ${settingVisible ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}`} >
				<div className=" absolute top-5 right-5 text-white cursor-pointer">
					<AiOutlineClose size={24} onClick={handleSettingVisible} className="hover:rotate-180 duration-300 transition-all rotate-0" />
				</div>
				<div className="p-36">
					<h1 className="text-5xl tracking-wider text-white font-thin mb-16">Setting</h1>
					<div className="text-white">
						<h1 className="uppercase text-lg">Colors</h1>
						<ul className="flex justify-between items-center my-7">
							<li className="w-8 h-8 rounded-full bg-red-400 p-2 cursor-pointer hover:outline">
							</li>
							<li className="w-8 h-8 rounded-full bg-blue-400 p-2 cursor-pointer hover:outline">
							</li>
							<li className="w-8 h-8 rounded-full bg-green-400 p-2 cursor-pointer hover:outline">
							</li>
							<li className="w-8 h-8 rounded-full bg-pink-400 p-2 cursor-pointer hover:outline">
							</li>
							<li className="w-8 h-8 rounded-full bg-purple-400 p-2 cursor-pointer hover:outline">
							</li>
						</ul>
					</div>
					<div className="text-white my-8">
						<h1 className="uppercase text-lg">Theme</h1>
						<ul className="my-5 inline-flex gap-5">
							<li className="hover:bg-blue-400 p-2 transition-all rounded-full">
								<BiSun size={30} className="cursor-pointer" />
							</li>
							<li className="hover:bg-blue-400 p-2 transition-all rounded-full">
								<BiMoon size={30} className="cursor-pointer" />
							</li>
						</ul>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Header