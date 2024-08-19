import React, { Component, useState } from "react";
import { TabButtons } from "./TabButtons";
import "../../CSS/Buttons.css";
import { EXAMPLES } from "./data";

const Buttons = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButtons isSelected={selectedTopic=="components"} onSelect={() => handleClick("components")}>Components</TabButtons>
          <TabButtons isSelected={selectedTopic=="jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButtons>
          <TabButtons isSelected={selectedTopic=="props"} onSelect={() => handleClick("props")}>Props</TabButtons>
          <TabButtons isSelected={selectedTopic=="state"} onSelect={() => handleClick("state")}>State</TabButtons>
        </menu>
        <div id="tab-content">
          {!selectedTopic ? 
            <p>Please select a topic to display the content...</p>:
            <div>
              <h3>{EXAMPLES[selectedTopic]?.title}</h3>
              <p>{EXAMPLES[selectedTopic]?.description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic]?.code}</code>
              </pre>
            </div>
          }
        </div>
      </section>
    </main>
  );
};

export default Buttons;
