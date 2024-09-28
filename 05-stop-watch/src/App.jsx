import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  function handleStart() {
    intervalId = setInterval(incrementCount, 1000);

    setIntervalId((id) => (id = intervalId));

    function incrementCount() {
      setCount((c) => c + 1);
    }
  }

  function handleStop() {
    clearInterval(intervalId);
    setIntervalId(null);
  }

  return (
    <div className="w-2/3 bg-gray-300 m-auto text-center rounded-2xl">
      <h1 className="m-5 font-semibold">StopWatch</h1>
      <h2 className="font-bold">{count}</h2>
      <div className="m-5">
        <button
          className="bg-green-500 px-4 py-2 rounded-lg m-3"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg m-3"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
