export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your list 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked == 100
          ? "You got everything packed!! Ready to go 😊!!"
          : `You have ${numItems} items on your list, and you already packed 
        ${numPacked} item. (${percentagePacked})% items are packed.`}
        💼
      </em>
    </footer>
  );
}
