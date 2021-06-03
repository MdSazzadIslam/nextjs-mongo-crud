import React from "react";
import Link from "next/link";
import moment from "moment";
import styles from "./studentList.module.css";
const TableRow = ({ students, deleteHandler }) => {
  return (
    <>
      {students.map((student) => (
        <tr key={student._id}>
          <td>{student.name}</td>
          <td>{student.country}</td>

          <td>{moment(student.dob).format("MMM DD, YYYY")}</td>
          <td>{student.email}</td>
          <td>
            <input
              type="button"
              value="delete"
              className={styles.delete_btn}
              onClick={(e) => deleteHandler(student._id)}
            />
          </td>
          <td className={styles.delete_btn}>
            <Link
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
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
