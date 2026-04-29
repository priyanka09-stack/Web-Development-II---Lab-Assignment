import { useState } from "react"

function StudentRow({ student, index, students, setStudents }) {
  const [newScore, setNewScore] = useState(student.score)

  const handleUpdate = () => {
    const updated = [...students]
    updated[index].score = Number(newScore)
    setStudents(updated)
  };

  const status = student.score >= 40 ? "• Pass" : "• Fail"

  return (
    <tr>
      <td>{student.name}</td>
      <td style={{color:"yellow" , fontWeight: "bolder"}}>{student.score}</td>

      <td style={{ color: status === "• Pass" ? "green" : "red" }}>
        <div className="jj">{status}</div>
      </td>

      <td>
        <input type="number"value={newScore} onChange={(e) => setNewScore(e.target.value)}/>
        <button onClick={handleUpdate} className="save">Save</button>
      </td>
    </tr>
  )
}

export default StudentRow