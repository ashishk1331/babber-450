import { useAppStore } from "../store/useAppStore";

export default function (props) {
	const DONE = useAppStore((state) => state.done).length;
	const TOTAL = 450;
	const PERCENT = (DONE / TOTAL) * 100;

	return (
		<div className="w-full my-4 flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<p>Total done:</p>
				<p>
					{DONE}/{TOTAL}
				</p>
			</div>
			<div className="w-full h-2 rounded-full bg-zinc-100 overflow-hidden flex">
				<div
					className="h-full rounded-full mr-auto bg-purple"
					style={{ width: PERCENT + "%" }}
				/>
			</div>
		</div>
	);
}
