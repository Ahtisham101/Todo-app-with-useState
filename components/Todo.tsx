import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const inputItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    if (!input) {
    } else {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  const handleDelete = (id: number) => {
    const updateItem = todos.filter((todo, index) => {
      if (id !== index) {
        return todo;
      }
    });
    setTodos(updateItem);
  };
  const handleReset = () => {
    setTodos([]);
  };
  return (
    <div className="font-sans bg-[#2d3748]  text-black min-h-screen">
      <div className="flex flex-col justify-center items-center mx-20">
        <h1 className="text-xl text-white">TODO APP</h1>
        <div className="flex items-center justify-center">
          <div className="border rounded overflow-hidden flex">
            <input
              type="text"
              className="px-4 py-2"
              placeholder="Add..."
              value={input}
              onChange={inputItem}
            />
            <button
              className="flex items-center justify-center px-4 border-l text-white"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              className="flex items-center justify-center px-4 border-l text-white"
              onClick={handleReset}
            >
              Reset All
            </button>
          </div>
        </div>

        <ul className="list-none mt-5 ">
          {todos.map((todo, index) => {
            return (
              <div key={index} className="flex justify-between space-x-10">
                <li className="text-white">{todo}</li>
                <button
                  className="text-red-700"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
