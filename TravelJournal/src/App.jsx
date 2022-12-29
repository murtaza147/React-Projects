import React from "react";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
    const entries = data.map(entry => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section>
                {entries}
            </section>
        </div>
    )
}
