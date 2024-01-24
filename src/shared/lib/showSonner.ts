import { toast } from "sonner";

type ConnerVariants = "success" | "error" | "warning";

interface Props {
	text: string;
	variant: ConnerVariants;
	duration?: number;
}

export const showConner = ({ text, variant, duration = 1500 }: Props) => {
	let bgColor!: string;
	if (variant === "success") {
		bgColor = "#30904E";
	}
	if (variant === "warning") {
		bgColor = "#C1C224";
	}
	if (variant === "error") {
		bgColor = "#90303E";
	}

	return toast[variant](text, {
		cancel: {
			label: "Close",
		},
		style: {
			backgroundColor: bgColor,
		},

		duration,
	});
};
