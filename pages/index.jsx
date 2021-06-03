import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import StudentList from "../components/SudentList";
import http from "../config";

export default function Home({ students }) {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const deleteHandler = async (id) => {
    try {
      await http
        .delete(process.env.API_URI + id)
        .then((res) => {
          console.log(res.data.msg);
          setMsg(res.data.msg);
          return res;
        })
        .catch((err) => {
          return setError(err);
        });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Layout>
      <span style={{ color: "black", textAlign: "center" }}>{msg} </span>
      <div className={styles.home}>
        {error !== "" ? (
          <div className="error">
            <span style={{ color: "red" }}>{error} </span>
          </div>
        ) : (
          ""
        )}

        <StudentList
          students={students.data}
          deleteHandler={(e) => deleteHandler(e)}
        />
      </div>
      <h4 className={styles.contact_me}>
        Got any questions?
        <a
          href="https://sazzad-islam-88.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span> Contact me.</span>
        </a>
      </h4>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data } = await http.get(process.env.API_URI + "student");
  return {
    props: {
      students: data,
      revalidate: 1,
    },
  };
};
