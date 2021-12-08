const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      {persons
        // .filter((person) => {
        //   return person.name.toLowerCase().includes(searchTerm.toLowerCase());
        // })
        .map((person) => {
          return (
            <div key={person.name}>
              {person.name} {person.number}{" "}
              <button onClick={() => handleDelete(person.id, person.name)}>
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Persons;
