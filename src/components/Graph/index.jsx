import { useEffect, useState } from "react";
import "./index.css";

export function Graph({
  days = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thurday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  },
}) {
  const [expensiveDay, SetExpensiveDay] = useState({});

  useEffect(() => {
    let expensiveOne=0
    for (const day in days) {
      expensiveOne<Number(days[day] )
      ? expensiveOne=Number(days[day] )
      : ''
    }
    SetExpensiveDay(expensiveOne)
  }, [days]);

  return (
    <section className="graph">
      <div className="day">
        <div>
          <div ToolTipValue={Number(days['Monday'])} className={`bar ${((days['Monday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Monday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>mon</p>
      </div>
      <div className="day">
      <div>
          <div ToolTipValue={Number(days['Tuesday'])} className={`bar ${((days['Tuesday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Tuesday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>tue</p>
      </div>
      <div className="day">
      <div>
          <div ToolTipValue={Number(days['Wednesday'])} className={`bar ${((days['Wednesday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Wednesday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>wed</p>
      </div>
      <div className="day">
      <div>
          <div ToolTipValue={Number(days['Thurday'])} className={`bar ${((days['Thurday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Thurday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>thu</p>
      </div>
      <div className="day">
      <div>
          <div ToolTipValue={Number(days['Friday'])} className={`bar ${((days['Friday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Friday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>fri</p>
      </div>
      <div className="day">
      <div>
          <div ToolTipValue={Number(days['Saturday'])} className={`bar ${((days['Saturday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Saturday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>sat</p>
      </div>
      <div className="day">
      <div>
          <div ToolTipValue={Number(days['Sunday'])} className={`bar ${((days['Sunday']/expensiveDay)*100)===100 && 'blue'}`} style={{height:`${(days['Sunday']/expensiveDay)*100}%`}}></div>
        </div>
        <p>sun</p>
      </div>
    </section>
  );
}
