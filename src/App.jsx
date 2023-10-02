import Task from "./components/Task";
import Header from "./components/Header";
import Share from "./components/Share";
import Footer from "./components/Footer";

import { sheet } from "./data/sheet.js";
import { useAppStore } from "./store/useAppStore.js";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function (props) {
    const topic = useAppStore((state) => state.topic);
    const changeTopic = useAppStore((state) => state.changeTopic);
    const [selectedTopic, setSelectedTopic] = useState(topic);

    return (
        <main className="p-3 px-6 max-w-[720px] mx-auto">
            <div className="w-full h-48 bg-purple absolute inset-0 -z-10" />
            <Header last_edited={props.last_edited} />

            <ul className="flex items-center gap-3 flex-wrap">
                <h2 className="w-full flex items-center gap-2">Topics
                </h2>
                {Object.keys(sheet).map((t, index) => (
                    <button
                        key={index}
                        className={twMerge(
                            "py-1 px-3 rounded-full text-xs font-medium border-2 border-purple transition-all",
                            topic === t && "bg-purple border-black",
                        )}
                        onClick={(e) => changeTopic(t)}
                    >
                        {t}
                    </button>
                ))}
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
