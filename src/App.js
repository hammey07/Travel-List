const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "MDMA", quantity: 3, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>⛱️Far away💼</h1>;
}

function Form() {
  function handlerSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  const numbers = Array.from(Array(20).keys());
  return (
    <>
      <form className="add-form" onSubmit={handlerSubmit}>
        <h3>What do you need for your 😁 trip?</h3>
        <select>
          {numbers.map((n) => (
            <option value={n + 1} key={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>
        <input type="text" placeholder="item..." />
        <button>Add</button>
      </form>
    </>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((entry) => (
          <Item item={entry} key={entry.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer>
      <em>💼 You have X items on your list, and you already packed X (X%)</em>{" "}
    </footer>
  );
}
