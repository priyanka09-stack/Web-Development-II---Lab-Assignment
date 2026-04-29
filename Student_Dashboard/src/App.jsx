import { useState } from "react"
import Header from "./components/Header"
import AddStudentForm from "./components/AddStudentForm"
import StudentTable from "./components/StudentTable"
import StudentRow from "./components/StudentRow"
import "./App.css"

function App() {
  const [students, setStudents] = useState([
    { name: "Aman", score: 78 },
    { name: "Riya", score: 45 },
    { name: "Jack", score: 23 },
    { name: "Nia", score: 66 },
  ]);
  const total = students.length
  const passed = students.filter(s => s.score >= 40).length
  const avg = students.reduce((sum, s) => sum + s.score, 0) / total || 0;

  return (
    <>
    
      <Header />

      
      
      <AddStudentForm students={students} setStudents={setStudents} />
      <div className="mm">
        <div className="g g1">
          <p>Total </p>
          <p style={{color:"rgb(0, 245, 212)",fontSize:"1.2rem ,fontWeight:bolder"}}>{total}</p>
        </div>
        <div className="g g2">
          <p>Passed</p>
          <p style={{color:"rgb(0, 245, 212)",fontSize:"1.2rem ,fontWeight:bolder"}}>{passed}</p>
          
        </div>
        <div className="g g3">
          <p>Average</p>
          <p style={{color:"rgb(0, 245, 212)",fontSize:"1.2rem ,font-weight:bolder"}}> {avg.toFixed(1)}</p>
        </div>
      </div>
  
      <StudentTable students={students} setStudents={setStudents} />
      
    </>
  );
}

export default App