/** @format */

import { useCallback } from 'react';

export default function useFormData(): <T = any>(data: T) => FormData {
	const onFormData = useCallback(<T = any>(data: T) => {
		//
		const formData = new FormData();
		//
		if (data instanceof Object) {
			//
			Object.entries(data).forEach(([key, value]) => {
				//
				if (value instanceof Object && !Array.isArray(value)) {
					debugger;
					if (value['0'] instanceof File) {
						debugger;
						const array = Object.values<File>(value);

						array.forEach((item) => formData.append(key, item));
					} else {
						const obj: any = onFormData(value);

						if (obj) formData.append(key, obj);
					}
				} else if (Array.isArray(value)) {
					value.forEach((val) => formData.append(key, val));
				} else {
					formData.append(key, value);
				}
			});
		}

		return formData;
	}, []);

	return onFormData;
}
