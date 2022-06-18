/** @format */

import { useCallback, useState } from "react";

function useLocalStorage<T = any>(
	key: string,
	initialValue?: T,
): [T | undefined, (value: T) => void, () => void] {
	// Get from local storage then
	// parse stored json or return initialValue
	const getItem = useCallback((): T | undefined => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === "undefined") {
			if (initialValue) return initialValue;
			return undefined;
		}

		if (initialValue) {
			window.localStorage.setItem(key, JSON.stringify(initialValue));
			return initialValue;
		}

		const item = window.localStorage.getItem(key);

		if (item !== null) return parseJSON(item) as T;

		return undefined;
	}, [initialValue, key]);

	const [value, setItem] = useState(getItem());

	const remove = () => window.localStorage.removeItem(key);

	const setValue = (value: T) => {
		window.localStorage.setItem(key, JSON.stringify(value));

		setItem(getItem());
	};

	return [value, setValue, remove];
}

export default useLocalStorage;

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
	try {
		return value === "undefined" ? undefined : JSON.parse(value ?? "");
	} catch {
		console.log("parsing error on", { value });
		return undefined;
	}
}
