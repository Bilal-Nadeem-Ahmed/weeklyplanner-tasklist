import AutoTextArea from "../autotextarea";
import InputBox from "../inputBox";
import { useState } from "react";
const Table = ({ name }) => {
  let [show, setShow] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div className="tablecontainer">
      <table>
        <thead>
          <tr>
            <th id="timeth">Time</th>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="timetd">
              <input type="number" />
            </td>
            <td>
              <AutoTextArea />

            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Add Task</button>
      {show === true ? <InputBox setShow={setShow} /> : null}
    </div>
  );
};

export default Table;
