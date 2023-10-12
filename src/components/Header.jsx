import Button from "./Button";
import { useState, useEffect } from "react";
import avatar from "/avatar.jpg";

export default function Header(props) {
    return (
        <header className="flex flex-col flex-wrap items-left gap-3 mt-24">
            <img
                src={avatar}
                width={520}
                height={520}
                alt="Sasuke"
                className="rounded-full w-48 h-48 aspect-square border-4 border-white bg-purple"
            />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Babber 450</h1>
            <div className="flex flex-wrap items-center gap-3 my-4 text-2xl text-zinc-400">
                Get super good in DSA like Toji Fushiguro was with combact
                skills. Grind more and get to the end of this sheet.
            </div>
        </header>
    );
}
