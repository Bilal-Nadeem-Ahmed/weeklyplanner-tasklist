const InputBox = ({ setShow }) => {
  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("it works");
    setShow(false);
  };
  return (
    <div id="inputbox">
      <p>enter duration of task</p>
      <p>enter task description</p>
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default InputBox;
