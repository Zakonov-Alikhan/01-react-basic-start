import Button from "./button/button";
import { differences } from "../data";
import { useState } from "react";

export default function OurDefereces() {
  const [contentType, setContentType] = useState(null);
  return (
    <section>
      <h3>Чем мы отличаемся от других?</h3>
      <Button
        isActiv={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActiv={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActiv={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Концентрация
      </Button>
      {/* <p>{differences[contentType]}</p> */}
      {/* {!contentType ? (
          "Click the button"
        ) : (
          <p>{differences[contentType]}</p>
        )} */}
      {!contentType && <p>Click the button</p>}
      {contentType && <p>{differences[contentType]}</p>}
      {/* {tabContent} */}
    </section>
  );

  function handleClick(type) {
    console.log("Button clicked: ", type);
    setContentType(type); // через эту функцию мы даём понять Реакту, что произашло изменение
    // contentType = type; это неверная запись, Реакту поебать на такую запись
    // + ещё type поменяется только с новым рендером, если ты дальше будешь работать с этим значением
    // то он  будет иметь предыдущее значение
  }
}

// const setArrey = useState("ContentType");
// let contentType = setArrey[0];
// let setContentType = setArrey[1];

// let tabContent = null;

// if (contentType) {
//   tabContent = <p>{differences[contentType]}</p>;
// } else {
//   tabContent = <p>Click the fucking BUTTON!</p>;
// }
