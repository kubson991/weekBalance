import { useEffect, useState } from "react";
import "./index.css";

export function Popup({ close, getValue, balances }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [values, setValues] = useState({
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thurday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  });

  useEffect(() => {
    setValues({...values , ... balances});
    function maskClick(e) {
      const className = e.target.className;
      className === "mask" && close();
    }
    window.addEventListener("click", maskClick);
    return () => {
      window.removeEventListener("click", maskClick);
    };
  }, []);
  function changeInput(e) {
    const day = {};
    day[e.target.name] = e.target.value;
    setValues({...values , ...day})
    getValue(day);
  }
  return (
    <section className="mask">
      <div className="popup">
        <form className="popupForm">
          {days.map((day) => (
            <div className="inputSection" key={day}>
              <label htmlFor={`$popupFormDay${day}`}>{day}</label>
              <input
                type="number"
                id={`$popupFormDay${day}`}
                onInput={changeInput}
                name={day}
                value={values[day]}
              />
            </div>
          ))}
        </form>
      </div>
    </section>
  );
}
