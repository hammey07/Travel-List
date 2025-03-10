import { use, useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Aleena", quantity: 3, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((cur) =>
      cur.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleToggleItem(id) {
    setItems((cur) =>
      cur.map((item) => {
        console.log(item);
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>⛱️Far away💼</h1>;
}

function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerSubmit(e) {
    e.preventDefault();
    if (!desc) return;

    const newItem = {
      description: desc,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);
    clearFields();
  }

  function clearFields() {
    setDesc((desc) => (desc = ""));
    setQuantity((q) => (q = 1));
  }
  const numbers = Array.from(Array(20).keys());
  return (
    <>
      <form className="add-form" onSubmit={handlerSubmit}>
        <h3>What do you need for your 😁 trip?</h3>
        <select
          id="select-field"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {numbers.map((n) => (
            <option value={n + 1} key={n + 1}>
              {n + 1}
            </option>
          ))}
        </select>
        <input
          id="input-field"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="item..."
        />
        <button>Add</button>
      </form>
    </>
  );
}
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((entry) => (
          <Item
            item={entry}
            key={entry.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
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
