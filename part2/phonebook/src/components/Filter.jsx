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

export default Filter;
