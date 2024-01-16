import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger, // SelectValue,
} from "@/components/ui/select";
import { useThemeCustom } from "@/hooks";
import { MoonStar, SunMoon } from "lucide-react";
import { Theme } from "../ui/theme-provider";
import s from "./Select.module.css";

export const SelectModel = () => {
	const { cls, theme, setTheme } = useThemeCustom();

	return (
		<>
			<Select value={theme} onValueChange={(value: Theme) => setTheme(value)}>
				<SelectTrigger className={s[`${cls}`]} style={{ width: "max-content" }}>
					{theme === "dark" ? <MoonStar /> : <SunMoon />}
				</SelectTrigger>

				<SelectContent className={s[`${cls}`]}>
					<SelectItem value="light" onSelect={() => setTheme("light")}>
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
