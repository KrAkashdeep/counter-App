import React, { useState } from "react";
import style from "./app.module.css";

function App() {
  const [num, setnum] = useState(0);

  function inc() {
    setnum(num + 1);
  }
  function dec() {
    setnum(num - 1);
    if (num === 0) {
      alert("you have reach the base value : ");
      setnum(0);
    }
  }

  return (
    <section className={style.sect}>
      <div className={style.container}>
        <div className={style.insidebox}>
          <h1>{num}</h1>
        </div>

        <div className={style.butbox}>
          <button className={style.button1} onClick={dec}>
            decrease
          </button>
        </div>
        <div className={style.butbox1}>
          <button className={style.button2} onClick={inc}>
            increase
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
