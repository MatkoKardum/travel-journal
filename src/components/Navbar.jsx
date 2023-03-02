import React from "react"
import logo from "../assets/logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} />
            <span>my travel journal.</span>
        </nav>
    )
}