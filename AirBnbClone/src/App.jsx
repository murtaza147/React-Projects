import React from "react"
import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import cardData from "./data"

export default function App() {
    const cardElements = cardData.map(card => {
        return (
            <Card
                key={card.id}
                card={card}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}