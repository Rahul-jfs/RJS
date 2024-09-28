import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description: description,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={handleQuantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={handleDescription}
      />
      <button>Add</button>
    </form>
  );
}
