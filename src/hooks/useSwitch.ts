/** @format */

import { useCallback, useState } from 'react';

const useSwitch = <A = boolean, B = boolean>(
	[opt_A, opt_B]: [A, B] = [true, false] as any,
): [A | B, () => void, { setA: () => void; setB: () => void }] => {
	// Initialize the state
	const [state, setState] = useState<A | B>(opt_A);

	const setSwitch = () => setState(state === opt_A ? opt_B : opt_A);
	const setA = () => setState(opt_A);
	const setB = () => setState(opt_B);

	return [state, setSwitch, { setA, setB }];
};

export default useSwitch;
