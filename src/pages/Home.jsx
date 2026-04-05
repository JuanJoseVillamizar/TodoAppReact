import { useState, useEffect } from 'react'

function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('Tasks')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(tasks))
  }, [tasks])
  function HandleSubmit(e) {
    e.preventDefault()
    const id = Date.now()
    const newTask = { id: id, task: task, completed: false }
    if (isDuplicate(newTask)) return
    addTask(newTask)

    setTask('')
  }

  function HandleDelete(id) {
    removeTask(id)
  }
  function HandleCompleted(id) {
    markAsCompleted(id)
  }

  const markAsCompleted = (id) => {
    const task = tasks.find((t) => (t.id = id))
    if (task) {
      task.completed = true
    }
  }
  const isDuplicate = (newTask) => {
    return tasks.some(
      (task) =>
        task.task.toLowerCase().trim() === newTask.task.toLowerCase().trim(),
    )
  }
  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask])
  }

  const removeTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => taskId !== task.id))
  }

  return (
    <div className="home">
      <form action="" className="task-form" onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          className="task-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="add-task-btn">
          Add
        </button>
      </form>
      <div className="list-task">
        <p>Tasks: {tasks.length}</p>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.task}
              <button type="button" onClick={() => HandleDelete(task.id)}>
                ❌
              </button>
              <button type="button" onClick={() => HandleCompleted(task.id)}>
                ✅
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
