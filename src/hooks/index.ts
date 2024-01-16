import { useTheme } from "@/components/ui/theme-provider";
import classNames from "classnames";
import { useCallback } from "react";

export const useThemeCustom = (
	dark: string = "dark_theme",
	light: string = "light_theme",
) => {
	const { setTheme, theme } = useTheme();

	const cls = classNames({
		[dark]: theme === "dark",
		[light]: theme === "light",
	});

	const changeTheme = useCallback(() => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	}, [setTheme, theme]);

	return { changeTheme, theme, setTheme, cls };
};
