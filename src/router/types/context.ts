/** @format */

export interface PathHistory {
	to: string;
	from: string;
}

export interface TodoType {
	id: number;
	title: string;
	completed?: boolean;
}

export interface StateRouter {
	to: string;
	from: string;
}

export const enum typesRouter {
	AuthDefined = "AUTH_DEFINED",
}

export type Action = { type: typesRouter.AuthDefined; data: PathHistory };
