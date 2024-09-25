// const time = new Date();

// export default function Header() {
//   return (
//     <header>
//       <h3>React Lerning</h3>
//       <span>Time: {time.toLocaleTimeString()}</span>
//     </header>
//   );
// }

/* с таймером в актуальном режиме*/
import React, { useState } from "react";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  // Храним текущее время в состоянии
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <HeaderContainer>
      <h3>React Learning</h3>
      <span id="timeResult">Time: {time.toLocaleTimeString()}</span>
    </HeaderContainer>
  );
}
