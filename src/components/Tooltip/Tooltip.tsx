import { ReactNode, useState } from "react"

const Tooltip = ({ children,text }: { children: ReactNode , text: string }) => {

	const [isVisible, setIsVisible] = useState(false);


	return (
		<div className="relative flex items-center group"
			onMouseEnter={() => { setIsVisible(!isVisible) }}
			onMouseOut={() => { setIsVisible(isVisible) }}>
			{children}
			<div className="tool-tip relative first-letter:uppercase opacity-0 group-hover:opacity-100 ml-4 group-hover:ease-linear transition-all">
				{text}
				<span className="tool-tip-arrow"></span>
			</div>
		</div>
	)
}

export default Tooltip