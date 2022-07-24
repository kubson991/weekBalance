import { useCallback, useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import { Popup } from "./components/Popup";
import { Graph } from "./components/Graph";

function App() {
  const [showPopup, setshowPopup] = useState(false);
  const [balance, setBalance] = useState(0);
  const [dayBalances, setDayBalances] = useState({});
  const [totalBalance, setTotalBalance] = useState(0);

  function closePopup() {
    setshowPopup(false);
  }
  function calculateSavings(params) {
    if (balance != 0) {
      return `${100*(balance-totalBalance)/balance}%`
    }
    else{
      return ''
    }
  }
  const saveDaysBlanace = useCallback((day) => {
    setDayBalances({ ...dayBalances, ...day });
  });

  useEffect(() => {
    let Balance = 0;
    for (const dayBalance in dayBalances) {
      Balance = Balance + Number(dayBalances[dayBalance]);
    }
    setTotalBalance(Balance);
  }, [dayBalances]);

  return (
    <div className="App">
      <header>
        <div className="content">
          <h3>My balance</h3>
          <div className="inputBalance">
            <span>$</span>
            <input
              type="number"
              value={balance}
              onInput={(e) => setBalance(e.target.value)}
            />
          </div>
        </div>
        <img src={logo} alt="showPopup" onClick={() => setshowPopup(true)} />
      </header>
      <main>
        <h1 className="spending">Spending - Last 7 days</h1>
        <Graph days={dayBalances} />
        <section className="bottomContent">
          <div className="content">
            <h3>Total this week</h3>
            <h1>${totalBalance}</h1>
          </div>
          <div className="secondContent">
            <p className="percentaje">{calculateSavings()}</p>
            <p className="percentajeTitle">saving</p>
          </div>
        </section>
      </main>
      {showPopup && <Popup close={closePopup} getValue={saveDaysBlanace} balances={dayBalances} />}
    </div>
  );
}

export default App;
