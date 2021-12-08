export default function Form({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) {
  return (
    <div>
      <h4>Add a new</h4>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add </button>
        </div>
      </form>
    </div>
  );
}
