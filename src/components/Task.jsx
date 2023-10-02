import {
	ArrowUpRightIcon,
	VideoCameraIcon,
	CheckIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useAppStore } from "../store/useAppStore.js";

export default function Task(props) {
	const d = useAppStore((state) => state.done);
	const [done, setDone] = useState(d.includes(props.id));
	const addDone = useAppStore((state) => state.addDone);
	const removeDone = useAppStore((state) => state.removeDone);

	return (
		<li className="flex flex-wrap items-center gap-3 my-4 border-2 border-zinc-100 rounded p-3">
			<p className="text-xl font-bold">{props.index + 1}</p>
			{props.url && (
				<Button cl="ml-auto bg-purple" href={props.url}>
					<ArrowUpRightIcon className="w-6 h-6 text-black" />
				</Button>
			)}
			<button
				taregt="_blank"
				className={twMerge(
					"p-3 rounded transition-all",
					done ? "bg-green-500" : "bg-zinc-100",
				)}
				onClick={(e) => {
					let newPrev = !done;
					if (newPrev) {
						addDone(props.id);
					} else {
						removeDone(props.id);
					}
					setDone(newPrev);
				}}
			>
				<CheckIcon className="w-6 h-6" />
			</button>
			<div className="w-full flex flex-col gap-2">
				<h1 className="text-xl">{props.title}</h1>
				{/*<p className="text-sm">{props.topic}</p>*/}
			</div>
		</li>
	);
}
