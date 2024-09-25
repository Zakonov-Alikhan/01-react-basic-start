import { useState } from "react";

export default function Privet() {
  const [hello, setHello] = useState("Привет, мир!");
  const [isChanged, setIsChanged] = useState(false);
  const [clickCount, setClickCount] = useState(1);

  return (
    <div>
      <p>{hello}</p>
      <button
        onClick={() => {
          if (!isChanged) {
            setHello(`Ты нажал на кнопку ${clickCount} раз!`);
          } else {
            setHello(`Привет, мир!`);
          }
          setIsChanged(!isChanged);
          setClickCount(clickCount + 1); // Увеличиваем счетчик на каждый клик
          if (clickCount > 5) {
            setHello("Лимит нажатий достигнут");
          }
        }}
      >
        Нажми сюда!
      </button>
    </div>
  );
}
