import styles from "./studentList.module.css";
import TableRow from "./TableRow";
const StudentList = ({ students, deleteHandler }) => {
  return (
    <div className={styles.list_container}>
      <h2>Total {students.length} records found</h2>
      <ul className={styles.responsive_table}>
        <li className={styles.table_header}>
          <div>Name</div>
          <div>Country</div>
          <div>DOB</div>
          <div>Email</div>
        </li>
        <TableRow students={students} deleteHandler={deleteHandler} />
      </ul>
    </div>
  );
};

export default StudentList;
