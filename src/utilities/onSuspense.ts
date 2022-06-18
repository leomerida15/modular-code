/** @format */

const onSuspense = <D = any>(service: () => Promise<any>): { read(): D | null | undefined } => {
	let status: "pending" | "error" | "success" = "pending";

	let data: D | null = null;

	let error: Error | null = null;

	const suspender = service()
		.then(({ data }) => {
			status = "success";
			data = data;
		})
		.catch((e) => {
			status = "error";
			error = e;
		});

	return {
		read() {
			if (status === "pending") {
				throw suspender;
			} else if (status === "error") {
				throw data;
			} else if (status === "success") {
				return data;
			}
		},
	};
};

export default onSuspense;
