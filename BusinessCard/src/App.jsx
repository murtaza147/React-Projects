import React from "react";
import Buttons from "./buttons"
import Content from "./content"

export default function App() {
  return (
    <div>
      <img className="pfp" src="pfp.png" />
      <div className="container">
        <h1 className="name">Murtaza Asrani</h1>
        <h1 className="prof">Full Stack Developer</h1>
        <h1 className="personnal-website"></h1>
        <Buttons />
        <Content />
      </div>
      <footer className="footer">
        <a  href="https://twitter.com/AsraniMurtaza" target="_blank"><img className="twitter" src="twitter.png"/></a>
        <a  href="https://www.facebook.com/profile.php?id=100083200183747" target="_blank"><img className="facebook" src="facebook.png"/></a>
        <a  href="https://www.instagram.com/murtaza.117/" target="_blank"><img className="instagram" src="instagram.png"/></a>
        <a  href="https://github.com/murtaza147" target="_blank"><img className="github" src="github.png"/></a>
      </footer>
    </div>
  )
}


