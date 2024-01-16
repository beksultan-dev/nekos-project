import { Rating } from "@/store/api/types";
import { ButtonUI } from "../../Button";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { useRating } from "../model";
import s from "./AgeRating.module.css";

export const AgeRating = () => {
	const {
		onValueChange,
		isCurrentFilterActive,
		onApplyChanges,
		defaultValue,
		globalAgeRating,
	} = useRating();

	return (
		<RadioGroup
			onValueChange={(value) => onValueChange(value as Rating)}
			defaultValue={globalAgeRating || defaultValue}
			className={s.radio}
		>
			<div className="flex items-center space-x-2 mt-1">
				<RadioGroupItem value={Rating.Safe} id="age-safe" />
				<Label htmlFor="age-safe">Safe for work</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value={Rating.Suggestive} id="age-suggestive" />
				<Label htmlFor="age-suggestive">Suggestive</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value={Rating.Borderline} id="age-borderline" />
				<Label htmlFor="age-borderline">Borderline</Label>
			</div>
			<div className="flex items-center space-x-2 mb-4">
				<RadioGroupItem value={Rating.Explicit} id="age-explicit" />
				<Label htmlFor="age-explicit">Explicit (18+)</Label>
			</div>
			<ButtonUI disabled={isCurrentFilterActive} onClick={onApplyChanges}>
				{isCurrentFilterActive ? "Enabled" : "Enable changes"}
			</ButtonUI>
		</RadioGroup>
	);
};
