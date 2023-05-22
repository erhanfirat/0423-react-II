import { useReducer } from "react";

const studentData = [
  { name: "ahmet", surname: "taş", Math: 80, English: 90 },
  { name: "kübra", surname: "taş", Math: 80, English: 90 },
  { name: "ayşe", surname: "taş", Math: 80, English: 90 },
  { name: "habibe", surname: "taş", Math: 80, English: 90 },
  { name: "yusuf", surname: "taş", Math: 80, English: 90 },
  { name: "emre", surname: "taş", Math: 80, English: 90 },
  { name: "bahri", surname: "taş", Math: 80, English: 90 },
];

const studentsReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "ADD_STUDENT":
      // todo: öğrenci var mı yok mu kontrolü
      let bulundu = false;
      state.forEach((student) => {
        if (
          student.name === action.payload.name &&
          student.surname === action.payload.surname
        ) {
          bulundu = true;
        }
      });

      // todo: yoksa state e eklenecek
      if (!bulundu) {
        return [...state, action.payload];
      } else {
        // todo: varsa eklenmeden statei döndürecek
        return state;
      }

    case "DELETE_STUDENT":
      let index = -1;
      state.forEach((student, i) => {
        if (
          student.name === action.payload.name &&
          student.surname === action.payload.surname
        ) {
          index = i;
        }
      });

      if (index >= 0) {
        const newStudents = [...state];
        newStudents.splice(index, 1);
        return newStudents;
      } else {
        return state;
      }

    default:
      return state;
  }
};

const StudentList = () => {
  const [students, dispatchStudents] = useReducer(studentsReducer, studentData);

  const addStudent = () => {
    debugger;
    dispatchStudents({
      type: "ADD_STUDENT",
      payload: {
        name: "ali",
        surname: "taş",
        Math: 80,
        English: 90,
      },
    });
  };

  const deleteStudent = () => {
    debugger;
    dispatchStudents({
      type: "DELETE_STUDENT",
      payload: {
        name: "ali",
        surname: "taş",
        Math: 80,
        English: 90,
      },
    });
  };

  return (
    <div>
      <button onClick={addStudent}> Add Student </button>
      <button onClick={deleteStudent}> Delete Student </button>
      {students.map((student, i) => (
        <div key={i}>
          <hr />
          <h2>Student {i + 1}</h2>
          <h3>name: </h3>
          <span>{student.name}</span>
          <h3>surname: </h3>
          <span>{student.surname}</span>
          <h3>Math: </h3>
          <span>{student.Math}</span>
          <h3>English: </h3>
          <span>{student.English}</span>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
