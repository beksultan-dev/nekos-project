import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger, // SelectValue,
} from "@/components/ui/select";
import classNames from "classnames";
import { MoonStar, SunMoon } from "lucide-react";
import { Theme, useTheme } from "../ui/theme-provider";
import s from "./Select.module.css";

export const SelectModel = () => {
	const { setTheme, theme } = useTheme();

	const selectClass = classNames({
		dark: theme === "dark",
		light: theme === "light",
	});

	return (
		<>
			<Select
				value={theme}
				onValueChange={(value: Theme) => setTheme(value)}
			>
				<SelectTrigger
					className={s[`${selectClass}`]}
					style={{ width: "max-content" }}
				>
					{theme === "dark" ? <MoonStar /> : <SunMoon />}
				</SelectTrigger>
				<SelectContent className={s[`${selectClass}`]}>
					<SelectItem
						value="light"
						onSelect={() => setTheme("light")}
					>
						Light
					</SelectItem>
					<SelectItem value="dark" onSelect={() => setTheme("dark")}>
						Dark
					</SelectItem>
				</SelectContent>
			</Select>
		</>
	);
};
