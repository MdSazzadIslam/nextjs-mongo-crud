import React from "react";
import Link from "next/link";
import moment from "moment";
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
          <div>{student.email}</div>
          <div>{moment(student.dob).format("MMM DD, YYYY")}</div>
          <input
            type="button"
            value="delete"
            className={styles.delete_btn}
            onClick={(e) => deleteHandler(student._id)}
          />

          <Link
            className={styles.delete_btn}
            href={{
              pathname: "/student",
              query: {
                id: student._id,
                name: student.name,
                country: student.country,
                email: student.email,
                dob: moment(student.dob).format("yyyy-MM-DD"),
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
