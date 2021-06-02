import styles from "./studentList.module.css";
import TableRow from "./TableRow";
const StudentList = ({ props }) => {
  return (
    <div className={styles.list_container}>
      <h2>
        Responsive Tables Using LI <small>Triggers on 767px</small>
      </h2>
      <ul className={styles.responsive_table}>
        <li className={styles.table_header}>
          <div className="col col-1">Job Id</div>
          <div className="col col-2">Customer Name</div>
          <div className="col col-3">Amount Due</div>
          <div className="col col-4">Payment Status</div>
        </li>
        <TableRow students={props} />
      </ul>
    </div>
  );
};

export default StudentList;
