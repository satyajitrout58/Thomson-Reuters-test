import React, { useContext } from "react";
import { OlympicContext } from "../context/OlympicContext";

const MedalBody = () => {
  const context = useContext(OlympicContext);
  const { state } = context;
  const { sortedMedal } = state;
  return (
    <tbody>
      {sortedMedal &&
        sortedMedal.length &&
        sortedMedal.map((val, key) => {
          return (
            <tr key={val.code}>
              <td>{key + 1}</td>
              <td
                className="flag"
                style={{ backgroundPositionY: val.position }}
              ></td>
              <td>{val.code}</td>
              <td>{val.gold}</td>
              <td>{val.silver}</td>
              <td>{val.bronze}</td>
              <td>{val.total}</td>
            </tr>
          );
        })}
    </tbody>
  );
};
export default React.memo(MedalBody);
