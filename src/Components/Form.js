import { useState } from "react";

export default function Form({ onAddItems }) {
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
