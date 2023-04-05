import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <img src="/src/images/hbd_ink_23.jpg" width={500} alt="" />
            <h1>Happy Birthday Ja!</h1>
            <p>
                มีความสุขมากๆ พี่อิ้งก็เก่งอยู่แล้ว ขอให้เก่งๆ
                หล่อเท่แบบนี้ตลอดไป
            </p>
        </div>
    );
}

export default App;
