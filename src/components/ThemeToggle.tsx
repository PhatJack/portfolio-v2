import { ActionType } from "../context/ThemeContext";
import { useThemeContext } from "../hook/useThemeContext";

const ThemeToggle: React.FC<{ text: string,bgColor: string }> = ({ text,bgColor }) => {
	const themeContext = useThemeContext();

	const toggleTheme = () => {
		themeContext.dispatch({ type: ActionType.TOGGLE_THEME,value: text });
	};
	return (
		<li onClick={toggleTheme} className={`color-theme ${bgColor}`} value={text}>
		</li>
	);
};

export default ThemeToggle;