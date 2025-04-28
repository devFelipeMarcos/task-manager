import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const TaskPage = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className="w-screen h-screen bg-blue-100 flex justify-center items-center p-6">
      <div className="w-full max-w-md space-y-6 bg-white rounded-xl p-6 shadow-lg relative">
        
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 transition"
        >
          <ChevronLeft size={28} />
        </button>

        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Task Details
        </h1>

        <div className="bg-blue-50 p-6 rounded-md space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 break-words">
            {title}
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap">
            {description}
          </p>
        </div>

      </div>
    </div>
  )
}

export default TaskPage
