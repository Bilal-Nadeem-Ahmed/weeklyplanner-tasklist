const Table = ({ name }) => {
  const handleClick = (e) => {
    const newElement = `<tr><td>'hello'<td/><tr/>`;
    e.target.appendChild(newElement);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>{name}</th>
        </tr>
      </thead>
      <tbody handleClick={(e) => handleClick(e)}>
        <tr>
          <td>
            <textarea name="task" id="task"></textarea>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
