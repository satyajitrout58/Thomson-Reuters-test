import React, { useContext, useEffect } from "react";
import MedalBody from "./MedalBody";
import ErrorBoundery from "./ErrorBoundery";
import { OlympicContext } from "../context/OlympicContext";
import { medalMockApi } from "../data/dataApi";

const MedalWraper = () => {
  const context = useContext(OlympicContext);
  const { state } = context;
  const { sortBy, error } = state;
  useEffect(() => {
    (async () => {
      try {
        const data = await medalMockApi();
        if (data.status === "success") {
          context.dispatch({
            type: "FETCH_MEDAL_SUCCESS",
            payload: data.result
          });
        }
      } catch (error) {
        context.dispatch({
          type: "FETCH_MEDAL_FAIL",
          payload: error
        });
      }
    })();
  }, []);

  const handleSort = (sortType) => {
    context.dispatch({
      type: "SORT_MEDAL",
      payload: sortType
    });
  };
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h2>Medal Count</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="3"></th>
            <th
              className={`gold${sortBy === "GOLD" ? " ACTIVE" : ""}`}
              onClick={() => handleSort("GOLD")}
            >
              <span></span>Gold
            </th>
            <th
              className={`silver${sortBy === "SILVER" ? " ACTIVE" : ""}`}
              onClick={() => handleSort("SILVER")}
            >
              <span></span>Silver
            </th>
            <th
              className={`bronze${sortBy === "BRONZE" ? " ACTIVE" : ""}`}
              onClick={() => handleSort("BRONZE")}
            >
              <span></span>Bronze
            </th>
            <th
              className={`total${sortBy === "TOTAL" ? " ACTIVE" : ""}`}
              onClick={() => handleSort("TOTAL")}
            >
              Total
            </th>
          </tr>
        </thead>
        <MedalBody />
      </table>
    </div>
  );
};

export default ErrorBoundery(React.memo(ErrorBoundery(MedalWraper)));
