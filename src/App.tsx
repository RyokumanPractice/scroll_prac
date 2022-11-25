import { useState } from "react";
import { Container } from "./components";

function App() {
  const [color, setColor] = useState<string | undefined>();
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0) setColor("red");
    if (e.deltaY > 0) setColor("blue");
  };
  return <Container color={color} onWheel={onWheel}></Container>;
}

export default App;
