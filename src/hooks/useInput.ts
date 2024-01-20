import { useCallback, useState } from "react";

export const useInput = () => {
	const [inputValue, setInputValue] = useState<string>("");

	const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	}, []);

	const onReset = useCallback(() => {
		setInputValue("");
	}, []);

	return { onChange, onReset, inputValue };
};
