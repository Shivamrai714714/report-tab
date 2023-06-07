import React, { useEffect, useState } from "react";
import WeekCard from "./WeekCard";

const API = "https://api.npoint.io/37e9946d519668936e37";

function Weeks() {
  const [weekData, setWeekData] = useState([]);

  useEffect(() => {
    const fetchWeekData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setWeekData(data.data.weeks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeekData();
  }, []);

  return (
    <div className="dispweek">
      {weekData.map((week) => (
        <WeekCard key={week.weekId} weekData={week} />
      ))}
    </div>
  );
}

export default Weeks;

// import React, { useEffect, useState } from "react";
// import WeekCard from "./WeekCard";

// function Weeks({ weekData }) {
//   console.log(weekData);
//   return (
//     <div className="dispweek">
//       {weekData.map((week) => (
//         <WeekCard key={week.weekId} weekData={week} />
//       ))}
//     </div>
//   );
// }

// export default Weeks;

// import React from "react";
// import WeekCard from "./WeekCard";

// function Weeks({ weekData }) {
//   return (
//     <div className="dispweek">
//       {weekData.map((week) => (
//         <WeekCard key={week.weekId} weekData={week} />
//       ))}
//     </div>
//   );
// }

// export default Weeks;
