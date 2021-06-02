import React from "react";
import styles from "./studentList.module.css";
const TableRow = ({ students }) => {
  return (
    <li className={styles.table_row}>
      <div className="col col-1" data-label="Job Id">
        42235
      </div>
    </li>
  );
};

export default TableRow;
