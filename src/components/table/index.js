import AutoTextArea from "../autotextarea";
import inputBox from "../inputBox";

const Table = ({ name }) => {
  const handleClick = (e) => {
    return <inputBox />;
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
    </div>
  );
};

export default Table;
