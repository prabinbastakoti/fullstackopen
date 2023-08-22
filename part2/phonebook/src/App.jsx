import { useState } from "react";

const Filter = ({ persons, filter, handleChange }) => {
  return (
    <>
      <div>
        filter shown with <input value={filter} onChange={handleChange} />
      </div>
      {filter.length > 0 ? (
        <>
          <h2>Filtered Numbers</h2>
          {persons
            .filter(
              (person) => person.name.toLowerCase() === filter.toLowerCase()
            )
            .map((item) => (
              <h4 key={item.id}>
                {item.name} {item.number}
              </h4>
            ))}
        </>
      ) : null}
    </>
  );
};

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

const Persons = ({ persons }) => {
  return persons.map((person) => (
    <h4 key={person.name}>
      {person.name} {person.number}
    </h4>
  ));
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  const addNote = (e) => {
    e.preventDefault();

    const exist = persons.filter((person) => person.name === newName);

    if (exist.length > 0) {
      alert(`${newName} is already in phonebook`);
    } else {
      const newObject = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };

      setPersons([...persons].concat(newObject));
      setNewName("");
      setNewNum("");
    }
  };

  const newNote = (e) => {
    setNewName(e.target.value);
  };

  const newNumber = (e) => {
    setNewNum(e.target.value);
  };

  const newFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} filter={filter} handleChange={newFilter} />

      <h2>add a new</h2>

      <Form
        handleSubmit={addNote}
        newName={newName}
        newNum={newNum}
        handleNoteChange={newNote}
        handleNumberChange={newNumber}
      />
      <h2>Numbers</h2>

      <Persons persons={persons} />
    </div>
  );
};

export default App;
