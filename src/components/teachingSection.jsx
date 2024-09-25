import WayToTeach from "./wayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <h1>Наш подход к обучению</h1>
      <br />
      <ul>
        {/* Используем .map() для итерации по массиву ways */}
        {ways.map((way) => (
          <WayToTeach
            // Уникальный ключ для каждого элемента списка, его можно убрать, но это может повлеч за собой проблемы при обновлении списка и замедлить работу
            key={way.id}
            {...way}
          />
        ))}
        {/* <WayToTeach {...ways[1]} /> вместо написания всех свойств, можно сделать так */}
      </ul>
    </section>
  );
}
