import phonebook from "./services/phonebook";

import { useState, useEffect } from "react";

import Filter from "./components/Filter";

import Form from "./components/Form";

import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    phonebook.getAll().then((initialData) => {
      setPersons(initialData);
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  const addNote = (e) => {
    e.preventDefault();

    const exist = persons.filter((person) => person.name === newName);

    if (exist.length > 0) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook,replace the old number with a new one? `
        )
      ) {
        const contact = persons.find((person) => person.name === newName);
        const index = contact.id;
        const changedContact = { ...contact, number: newNum };

        phonebook.update(index, changedContact).then((response) => {
          setPersons(
            persons.map((person) => (person.id !== index ? person : response))
          );
        });
      }
    } else {
      const newObject = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };

      phonebook.create(newObject).then((newNoteReturned) => {
        setPersons(persons.concat(newNoteReturned));
        setNewName("");
        setNewNum("");
      });
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

  const handleRemove = (id) => {
    const currentItem = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${currentItem.name}?`)) {
      phonebook
        .removePhone(id)
        .then(() => {
          phonebook
            .getAll()
            .then((response) => setPersons(response))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
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

      <Persons persons={persons} remove={handleRemove} />
    </div>
  );
};

export default App;
