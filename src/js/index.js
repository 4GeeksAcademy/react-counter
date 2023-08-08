//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Home from "./component/home.jsx";



let num = 0;
let decenas = 0;
let centenas = 0;
let mil = 0;
let diezMil=0;
let cienMil = 0;

function displayHello() {
    //render your react application
    //            qué vamos a dibujar,    donde lo vamos a dibujar
    ReactDOM.render(<Home unidad={num} decenas={decenas} centenas={centenas} mil={mil} diezMil={diezMil} cienMil={cienMil}/>, document.querySelector("#app"));
    num++;

    if (num>2) {
        decenas ++
        num=0
    }

    if (decenas>2) {
        centenas ++
        decenas=0
    }

    if (centenas>2) {
        mil ++
        centenas=0
    }

    if (mil>2) {
        diezMil++
        mil=0
    }

    if (diezMil>2) {
        cienMil++
        diezMil=0
    }
}

setInterval(displayHello, 1000);