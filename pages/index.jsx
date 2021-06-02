import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import StudentList from "../components/SudentList";
export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <StudentList />
      </div>
    </Layout>
  );
}
