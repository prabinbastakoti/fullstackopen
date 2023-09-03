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
  const [message, setMessage] = useState("");
  const [err, setError] = useState("");

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

        phonebook
          .update(index, changedContact)
          .then((response) => {
            setPersons(
              persons.map((person) => (person.id !== index ? person : response))
            );
            renderMessage(
              `Updated ${changedContact.name} phone number to ${changedContact.number}`
            );

            setTimeout(() => {
              renderMessage("");
            }, 5000);
          })
          .catch((err) => {
            renderError(
              `Information of ${newName} has already removed from server`
            );
            setTimeout(() => {
              renderError("");
            }, 5000);
            phonebook.getAll().then((response) => setPersons(response));
          });

        setNewName("");
        setNewNum("");
      }
    } else {
      const newObject = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };

      phonebook
        .create(newObject)
        .then((newNoteReturned) => {
          setPersons(persons.concat(newNoteReturned));
          setNewName("");
          setNewNum("");
          renderMessage(`Added ${newName} to the phonebook`);
          setTimeout(() => {
            renderMessage("");
          }, 5000);
        })
        .catch((error) => {
          const errorMsg = error.response.data.error;
          renderError(errorMsg);
          setTimeout(() => {
            renderError("");
          }, 5000);
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

  const renderError = (msg) => {
    setError(msg);
  };

  const renderMessage = (msg) => {
    setMessage(msg);
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
      {message ? <h1 className="message">{message}</h1> : null}
      {err ? <h1 className="error">{err}</h1> : null}
      <h2>Numbers</h2>

      <Persons persons={persons} remove={handleRemove} />
    </div>
  );
};

export default App;
