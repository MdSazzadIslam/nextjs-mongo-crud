import React from "react";
import styles from "./studentList.module.css";
const TableRow = ({ students, deleteHandler }) => {
  /*   const deleteHandler = (id) => {
    console.log(id);
  }; */
  return (
    <>
      {students.map((student) => (
        <li className={styles.table_row} key={student._id}>
          <div>{student.name}</div>
          <div>{student.country}</div>
          <div>{student.country}</div>
          <div>{student.dob}</div>
          <input
            type="button"
            value="delete"
            className={styles.delete_btn}
            onClick={(e) => deleteHandler(student._id)}
          />
        </li>
      ))}
    </>
  );
};

export default TableRow;
