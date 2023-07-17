import { useEffect, useState } from "react"
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineUser, AiOutlineClose, AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsBriefcase, BsColumnsGap } from 'react-icons/bs'
import Tooltip from "../../components/Tooltip/Tooltip"
import { BiMoon, BiSun } from "react-icons/bi"
// import EducationItem from "../Education/EducationItem"
// import Main from "../Main/Main"



const Header = () => {

	const [nav, setNav] = useState(false);


	//Toggle dark and light mode

	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme == "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");

		}
		console.log(theme)
	}, [theme]);


	//Check setting visible

	const [settingVisible, setSettingVisible] = useState(false);

	const handleSettingVisible = () => {
		setSettingVisible(!settingVisible);
	}

	//Change Color Theme

	const [colorTheme, setColorTheme] = useState("primary");

	useEffect(() => {
		const currentThemeColor = localStorage.getItem("theme-color");

		if (currentThemeColor) {
			setColorTheme(currentThemeColor);
			console.log(colorTheme)
		}
	}, []);

	const handleChangeColorTheme = (theme: string) => {

		setColorTheme(theme);
		localStorage.setItem("theme-color", theme);

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
			icon: AiOutlineInfoCircle
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
		<div className="relative">
			<div className="fixed md:top-8 top-0 left-0 z-10">
				<button onClick={handleSettingVisible} className="m-2 p-4 bg-gray-100 shadow-custom rounded-lg">
					<AiOutlineSetting size={22} className="animate-[spin_2s_linear_infinite]" />
				</button>
			</div>
			<div className="fixed top-2 right-2 z-[99] md:hidden w-10 h-10 bg-gray-100 rounded-full shadow-xl cursor-pointer group">
				{!nav ?
					<AiOutlineMenu size={25} onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer" />
					:
					<AiOutlineClose size={25} onClick={handleNav} className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer rotate-0 transition-all hover:rotate-[360deg] duration-500" />
				}
			</div>
			{
				nav ? (
					<div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
						{menu.map((item) => (
							<a href={`#${item.path}`} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200
							dark:bg-black dark:text-white">
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
									<a href={`#${item.path}`} className="rounded-full bg-gray-100 shadow-custom m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300
																		dark:bg-black dark:text-white">
										<item.icon size={20} />
									</a>
								</Tooltip>
							))}
						</div>
					</div>
				)
			}
			<div className={`w-full h-screen fixed z-[10] bg-gray-300/40 dark:bg-white/60 ${settingVisible ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}`} onClick={handleSettingVisible}></div>
			<div className={`bg-gray-800 dark:bg-black md:w-[70%] w-[85%] h-screen fixed z-[10] !visible transition-all bottom-0 duration-500 ${settingVisible ? 'right-0 opacity-100' : 'right-[-100%] opacity-0'}`} >
				<div className=" absolute md:top-5 top-20 right-5 text-white cursor-pointer">
					<AiOutlineClose size={24} onClick={handleSettingVisible} className="hover:rotate-[360deg] duration-500 transition-all rotate-0" />
				</div>
				<div className="p-36">
					<h1 className="text-5xl tracking-wider text-white font-thin mb-16">Setting</h1>
					<div className="text-white xl:w-1/2 w-full">
						<h1 className="uppercase text-lg">Colors</h1>
						<ul className="grid xl:grid-cols-6 grid-cols-3 my-7 ml-2 gap-5">
							<li className="w-8 h-8 rounded-full bg-primary p-2 cursor-pointer hover:outline" onClick={() => handleChangeColorTheme("primary")}>
							</li>
							<li className="w-8 h-8 rounded-full bg-theme-red p-2 cursor-pointer hover:outline" onClick={() => handleChangeColorTheme("theme-red")}>
							</li>
							<li className="w-8 h-8 rounded-full bg-theme-blue p-2 cursor-pointer hover:outline" onClick={() => handleChangeColorTheme("theme-blue")}>
							</li>
							<li className="w-8 h-8 rounded-full bg-theme-green p-2 cursor-pointer hover:outline" onClick={() => handleChangeColorTheme("theme-green")}>
							</li>
							<li className="w-8 h-8 rounded-full bg-theme-pink p-2 cursor-pointer hover:outline" onClick={() => handleChangeColorTheme("theme-pink")}>
							</li>
							<li className="w-8 h-8 rounded-full bg-theme-purple p-2 cursor-pointer hover:outline" onClick={() => handleChangeColorTheme("theme-purple")}>
							</li>
						</ul>
					</div>
					<div className="text-white my-8">
						<h1 className="uppercase text-lg">Theme</h1>
						<ul className="my-5 inline-flex gap-5">
							<li>
								<button className={` p-2 transition-all rounded-full ${theme == "light" ? "bg-white text-black" : "hover:text-black hover:bg-white"}`}>
									<BiSun size={30} className={`cursor-pointer rotate-0 transition-all duration-500 hover:rotate-[360deg]`} onClick={() => setTheme("light")} />
								</button>
							</li>
							<li>
								<button className={` p-2 transition-all rounded-full ${theme == "dark" ? "bg-white text-black " : "hover:text-white hover:bg-black"}`}>
									<BiMoon size={30} className={`cursor-pointer rotate-0 transition-all duration-500 hover:rotate-[360deg]`} onClick={() => setTheme("dark")} />
								</button>
							</li>
						</ul>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Header