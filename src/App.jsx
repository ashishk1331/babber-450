import Task from "./components/Task";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import { sheet } from "./data/sheet.js";
import { useAppStore } from "./store/useAppStore.js";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function (props) {
    const done = useAppStore((state) => state.done);
    const topic = useAppStore((state) => state.topic);
    const changeTopic = useAppStore((state) => state.changeTopic);
    const [selectedTopic, setSelectedTopic] = useState(topic);

    return (
        <main className="p-3 px-6 max-w-[720px] mx-auto">
            <div className="w-full h-48 bg-purple absolute inset-0 -z-10" />
            <Header last_edited={props.last_edited} />

            <Stats />

            <ul className="flex items-center gap-3 flex-wrap">
                <h2 className="w-full flex items-center gap-2">Topics</h2>
                {Object.keys(sheet).map((t, index) => {
                    let count_of_done_questions = 0;

                    for (let { id } of sheet[t]) {
                        if (done.includes(id)) {
                            count_of_done_questions += 1;
                        }
                    }

                    return (
                        <button
                            key={index}
                            className={twMerge(
                                "py-1 px-3 rounded-full text-xs font-medium border-2 border-purple transition-all",
                                topic === t && "bg-purple border-black",
                            )}
                            onClick={(e) => changeTopic(t)}
                        >
                            {t}{" "}
                            {count_of_done_questions > 0 &&
                                count_of_done_questions}
                        </button>
                    );
                })}
            </ul>

            <ul className="pt-3">
                {sheet[topic].map((i, index) => (
                    <Task key={i.id} {...i} index={index} />
                ))}
            </ul>

            <Footer />
        </main>
    );
}
