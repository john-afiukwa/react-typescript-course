const ListGroup = () => {
  const places = ["Asia", "Belgium", "Canada", "Dakosta", "England"];

  return (
    <>
      <h1>List of Placets</h1>

      <ul>
        {places.map((place) => (
          <li key={place}>{place}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
