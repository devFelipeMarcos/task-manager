import React from 'react'
import { ChevronRightIcon, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  const navigate = useNavigate()

  const handleSeeDetails = (task) => {
    const params = new URLSearchParams({
      title: task.title,
      description: task.description,
    })
    navigate(`/details?${params.toString()}`)
  }

  return (
    <ul className="space-y-4 p-6 bg-blue-50 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-2">
          <button
            onClick={() => onToggle(task.id)}
            className={`flex-1 text-left px-4 py-2 rounded-md transition ${
              task.isCompleted
                ? 'bg-green-500 line-through text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => handleSeeDetails(task)}
            className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks
