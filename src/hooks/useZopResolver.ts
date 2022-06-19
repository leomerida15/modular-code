/** @format */
import { z } from "zod";
import { useCallback } from "react";

const User = z.object({
	username: z.string(),
});

type a = z.infer<typeof User>;

export const useZodValid = (validationSchema: z.ZodObject<any>) =>
	useCallback(
		(data) => {
			try {
				const values = validationSchema.parse(data);

				return {
					values,
					errors: {},
				};
			} catch (errors: any) {
				return {
					values: {},
					errors: errors.inner.reduce(
						(allErrors: any, currentError: { path: any; type: any; message: any }) => ({
							...allErrors,
							[currentError.path]: {
								type: currentError.type ?? "validation",
								message: currentError.message,
							},
						}),
						{},
					),
				};
			}
		},
		[validationSchema],
	);
