import React from "react";
import Decenas from "./decenas";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component

console.log("hola")

const Home = ({unidad, decenas, centenas, mil, diezMil, cienMil}) => {

    return (
        <div className="text-center">
			<div className="row align-items-center">

			<Decenas unidad={unidad} decenas={decenas} centenas={centenas} mil={mil} diezMil={diezMil} cienMil={cienMil}/>
			</div>
        </div>
    );
};

export default Home;
