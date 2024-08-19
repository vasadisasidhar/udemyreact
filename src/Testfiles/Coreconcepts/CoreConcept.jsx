import React from "react";
import "../../CSS/Coreconcept.css";
import { FrndsSending, PropsSending } from "./PropsSending.jsx";
/*import img from "../../Images/components.png";
import stateImg from "../../Images/state-mgmt.png";
import { PropsSendingg } from "./PropsSending.jsx";*/
import { CORE_CONCEPTS } from "./data.js";

import { VZM_FRNDS } from "./data1.js";


const CoreConcept = () => {
  return (
    <div>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((items) => (<PropsSending{...items} />))} 
            {VZM_FRNDS.map((frnd)=>(<FrndsSending{...frnd}/>))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CoreConcept;
