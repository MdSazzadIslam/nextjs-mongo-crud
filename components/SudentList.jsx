import styles from "./studentList.module.css";
import TableRow from "./TableRow";
const StudentList = ({ students, deleteHandler }) => {
  return (
    <div className={styles.list_container}>
      <h2>Total {students.length} records found</h2>
      <table className={styles.responsive_table}>
        <thead>
          <tr>
            <th className={styles.header}>Name</th>
            <th className={styles.header}>Country</th>
            <th className={styles.header}>DOB</th>
            <th className={styles.header}>Email</th>
            <th className={styles.header}>Delete </th>
            <th className={styles.header}>Edit </th>
          </tr>
        </thead>
        <tbody>
          <TableRow students={students} deleteHandler={deleteHandler} />
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
