import Button from "./Button";
import { useState, useEffect } from "react";

export default function Header(props) {
    return (
        <header className="flex flex-col flex-wrap items-left gap-3 mt-24">
            <img
                src="https://i.pinimg.com/564x/9d/e5/d2/9de5d2ab40011b354914c778341e3bff.jpg"
                width={520}
                height={520}
                alt="Sasuke"
                className="rounded-full w-48 h-48 aspect-square border-4 border-white bg-purple"
            />
            <h1 className="text-4xl font-bold tracking-tight">Babber 450</h1>
            <div className="flex flex-wrap items-center gap-3 my-4">
                Get super good in DSA like Toji Fushiguro was with combact
                skills. Grind more and get to the end of this sheet.
            </div>
        </header>
    );
}
