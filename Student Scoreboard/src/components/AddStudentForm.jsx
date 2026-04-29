import { useState } from "react"

function AddStudentForm({ students, setStudents }) {
  const [name, setName] = useState("")
  const [score, setScore] = useState("")

  const handleAdd = (e) => {
    e.preventDefault()
    if (!name || !score) 
      return;

    const newStudent = {
      name,
      score: Number(score)
    };

    setStudents([...students, newStudent])

    setName("")
    setScore("")
  };

  return (
    
    <form>
     
      <input type="text"placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)}/>
      <button onClick={handleAdd}>+ Add</button>
    </form>
  )
}

export default AddStudentForm