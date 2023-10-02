import { twMerge } from "tailwind-merge";

export default function Button(props) {
	return (
		<a
			href={props.href}
			taregt="_blank"
			className={twMerge(
				"p-3 rounded bg-transparent transition-all " +
				props.cl
			)}
			{...props}
		>
			{props.children}
		</a>
	);
}

Button.defaultProps = {
	href: "#",
};
