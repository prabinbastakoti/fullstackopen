const Form = ({ handleSubmit, value, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="countries" style={{ marginRight: "1em" }}>
          find countries
        </label>
        <input
          type="text"
          id="countries"
          value={value}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Form;
