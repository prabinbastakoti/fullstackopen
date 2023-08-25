const Persons = ({ persons, remove }) => {
  return persons.map((person) => (
    <h4 key={person.name}>
      {person.name} {person.number}
      <button onClick={() => remove(person.id)}>delete</button>
    </h4>
  ));
};

export default Persons;
