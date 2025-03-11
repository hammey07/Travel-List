import { use, useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import Stats from "./Components/Stats";
import Item from "./Components/Item";
import PackingList from "./Components/PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleClearAllItems() {
    window.confirm("Are you sure you want to delete all of the items?") &&
      setItems([]);
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
        onClearItems={handleClearAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
