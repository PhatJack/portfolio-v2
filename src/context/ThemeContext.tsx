import { ReactNode, createContext, useMemo, useReducer } from "react";

interface ThemeState {
	themeColor: string;
}

export enum ActionType {
	TOGGLE_THEME = "TOGGLE_THEME",
}

interface ToggleThemeAction {
	type: ActionType.TOGGLE_THEME;
	value: string;
}

type Action = ToggleThemeAction;

export interface ThemeContextProps extends ThemeState {
	dispatch: React.Dispatch<Action>;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
	undefined
);

const themeReducer = (state: ThemeState, action: Action): ThemeState => {
	switch (action.type) {
		case ActionType.TOGGLE_THEME:
			return {
				...state,
				themeColor: action.value ,
			};
		default:
			return state;
	}
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(themeReducer, { themeColor: "primary" });

	const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};