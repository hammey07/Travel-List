export default function App() {
  return (
    <div class="app">
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
  return (
    <>
      <div className="add-form"></div>
      <h3>What do you need for your 😁 trip?</h3>
    </>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}
function Stats() {
  return (
    <footer>
      <em>💼 You have X items on your list, and you already packed X (X%)</em>{" "}
    </footer>
  );
}
