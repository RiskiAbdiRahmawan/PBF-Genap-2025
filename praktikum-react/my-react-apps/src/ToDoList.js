import { useState } from "react";
// import { Trash2 } from "lucide-react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Tambahkan tugas baru..."
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Tambah
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-lg"
          >
            <span>{task}</span>
            <button onClick={() => removeTask(index)} className="text-red-500">
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
