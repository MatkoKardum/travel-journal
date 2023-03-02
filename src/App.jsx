import React from "react"
import Navbar from "./components/Navbar"
import data from "./data"
import Card from "./components/Card"

export default function App() {
  const cards = data.map(item => {
    return ( 
      <Card 
        key={item.key}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className="cards">
        {cards}
      </section>
    </div>
  )
}


