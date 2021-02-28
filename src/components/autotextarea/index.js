import { useState } from "react";
const AutoTextArea = () => {
  const [value, setValue] = useState("");
  const [rows, setRows] = useState(5);
  const [minRows, setMinRows] = useState(5);
  const [maxRows, setMaxRows] = useState(15);

  const handleChange = (event) => {
    const textareaLineHeight = 24;
    // const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setValue(event.target.value);
    currentRows < maxRows ? setRows(currentRows) : setRows(maxRows);
  };
  return (
    <textarea
      rows={rows}
      value={value}
      placeholder={"Enter your text here..."}
      className={"textarea"}
      onChange={handleChange}
    />
  );
};

export default AutoTextArea;
