import { Button } from "@/common/ui/button";
import { Rating } from "@/store/models/random-char-models";
import { Label } from "../../../../../common/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../../../common/ui/radio-group";
import { useSetRating } from "./hooks/useSetRating";

export const AgeRatingSelect = () => {
	const { onValueChange, onApplyChanges, isCurrentFilterActive, defaultValue, globalAgeRating } =
		useSetRating();

	return (
		<RadioGroup
			onValueChange={(value) => onValueChange(value as Rating)}
			defaultValue={globalAgeRating || defaultValue}
		>
			<div className="mt-1 flex items-center space-x-2">
				<RadioGroupItem value={Rating.Safe} id="age-safe" />
				<Label htmlFor="age-safe" className="cursor-pointer">
					Safe for work
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value={Rating.Suggestive} id="age-suggestive" />
				<Label htmlFor="age-suggestive" className="cursor-pointer">
					Suggestive
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value={Rating.Borderline} id="age-borderline" />
				<Label htmlFor="age-borderline" className="cursor-pointer">
					Borderline
				</Label>
			</div>
			<div className="mb-4 flex items-center space-x-2">
				<RadioGroupItem value={Rating.Explicit} id="age-explicit" />
				<Label htmlFor="age-explicit" className="cursor-pointer">
					Explicit (18+)
				</Label>
			</div>
			<Button
				variant={"default"}
				disabled={isCurrentFilterActive}
				onClick={onApplyChanges}
				className="text-base"
			>
				{isCurrentFilterActive ? "Enabled" : "Enable changes"}
			</Button>
		</RadioGroup>
	);
};
