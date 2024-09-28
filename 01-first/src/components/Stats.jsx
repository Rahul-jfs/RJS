export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">Start adding items to your packing list 🚀</p>;
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything! Ready to go ✈"
          : ` You have ${numItems} items on your list, and you have already packed
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
