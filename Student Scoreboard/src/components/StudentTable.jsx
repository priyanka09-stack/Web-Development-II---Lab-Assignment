import StudentRow from "./StudentRow"

function StudentTable({ students, setStudents }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}><div id="sd"><p>Student Record</p></div></th>
          <th colSpan={1}><div id="dd"><p>{students.length} Entries</p></div></th>
        </tr>


        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
          <th>Update</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student, index) => (
          <StudentRow
            key={index}
            index={index}
            student={student}
            students={students}
            setStudents={setStudents}
          />
        ))}
      </tbody>
    </table>
  )
}

export default StudentTable