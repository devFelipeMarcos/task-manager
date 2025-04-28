import React, { useEffect, useState } from 'react'
import Tasks from './components/Tasks'
import AddTaskForm from './components/AddTaskForm'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    )
    setTasks(updatedTasks)
  }

  const handleDeleteTask = (taskId) => {
    const filtered = tasks.filter((task) => task.id !== taskId)
    setTasks(filtered)
  }

  const handleAddTask = (title, description) => {
    if (!title.trim() || !description.trim()) {
      return alert('Please fill in both fields.')
    }

    if (tasks.some((t) => t.title === title)) {
      return alert('A task with this title already exists.')
    }

    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center p-6">
      <div className="w-full max-w-md space-y-6 bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-blue-700">
          Task Manager
        </h1>
        <AddTaskForm onAdd={handleAddTask} />
        <Tasks
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      </div>
    </div>
  )
}

export default App
