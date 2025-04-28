import React, { useState } from 'react'
import Input from './Input'

const AddTaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    onAdd(title, description)
    setTitle('')
    setDescription('')
  }

  return (
    <div className="space-y-4 p-6 bg-blue-50 rounded-md shadow">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Task Title"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Task Description"
      />
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
      >
        Add Task
      </button>
    </div>
  )
}

export default AddTaskForm
