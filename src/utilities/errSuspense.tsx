/** @format */

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children: ReactNode;
	component?: ReactNode;
	ComponentDidCatch?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
	hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	constructor(props: Props | Readonly<Props>) {
		super(props);
	}

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		//
		if (this.props.ComponentDidCatch) this.props.ComponentDidCatch(error, errorInfo);
		//
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			if (this.props.component) return this.props.component;

			return <></>;
		}

		return this.props.children;
	}
}
