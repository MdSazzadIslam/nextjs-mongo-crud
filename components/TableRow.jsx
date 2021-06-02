import React from "react";
import Link from "next/link";
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
          <Link
            className={styles.delete_btn}
            href={{
              pathname: "/createStudent",
              query: {
                id: student._id,
                name: student.name,
                country: student.country,
                dob: student.dob,
              },
            }}
          >
            Edit
          </Link>
        </li>
      ))}
    </>
  );
};

export default TableRow;
