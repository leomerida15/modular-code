/** @format */

import { useCallback, useState } from "react";

const useSwitch = <A = true, B = false>(
	[opt_A, opt_B]: [A, B] = [true, false] as [A, B],
): [A | B, () => void, { setA: () => void; setB: () => void }] => {
	// Initialize the state
	const [state, setState] = useState<A | B>(opt_A);

	const setSwitch = useCallback(() => setState(state === opt_A ? opt_B : opt_A), [opt_A, opt_B]);
	const setA = useCallback(() => setState(opt_A), [opt_A]);
	const setB = useCallback(() => setState(opt_B), [opt_B]);

	return [state, setSwitch, { setA, setB }];
};

export default useSwitch;
