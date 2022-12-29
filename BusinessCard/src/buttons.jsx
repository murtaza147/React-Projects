import React from "react";

export default function Buttons() {
    return (
        <>
            <a href="mailto:murtaza.asrani@gmail.com">
                <button className="email--button">
                    <img src="email.png"></img>
                    <p className="email--link">Email</p>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/murtaza-asrani-48a750253/" target="_blank">
                <button className="linkedin--button">
                    <img src="linkedin.png"></img>
                    <p className="linkedin--link">LinkedIn</p>
                </button>
            </a>
        </>
    )
}