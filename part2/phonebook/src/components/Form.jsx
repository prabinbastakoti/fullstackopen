const Form = (props) => {
  const handleSubmit = props.handleSubmit;
  const newName = props.newName;
  const newNum = props.newNum;
  const handleNoteChange = props.handleNoteChange;
  const handleNumberChange = props.handleNumberChange;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNoteChange} />
      </div>
      <div>
        number: <input value={newNum} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
