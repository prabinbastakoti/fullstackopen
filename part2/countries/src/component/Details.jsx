import countries from "../country/Countries";

const Details = ({ length, list, show }) => {
  if (length === 1) {
    return (
      <>
        <h1>{list[0].name.common}</h1>
        <p>Capital {list[0].capital}</p>
        <p>Area {list[0].area}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.keys(list[0].languages).map((key) => {
            return <li key={key}> {list[0].languages[key]}</li>;
          })}
        </ul>
        <div style={{ fontSize: "15rem" }}>{list[0].flag}</div>
      </>
    );
  } else if (length < 10) {
    return list.map((item) => (
      <div
        key={item.name.common}
        style={{ display: "flex", alignItems: "center" }}
      >
        <p>{item.name.common}</p>
        <button
          style={{ width: "50px", height: "30px", marginLeft: "5px" }}
          onClick={() => show(item)}
        >
          Show
        </button>
      </div>
    ));
  } else {
    return <p>Too many matches, specify another filter</p>;
  }
};

export default Details;
