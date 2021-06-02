import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import StudentList from "../components/SudentList";
import http from "../config";

export default function Home({ students }) {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const deleteHandler = async (id) => {
    debugger;
    try {
      await http
        .post(process.env.API_URI + "student/" + `${id}`, {
          id,
        })
        .then((res) => {
          setMsg(res.data.msg);
          res;
          clearField();
        })
        .catch((err) => {
          setError(err);
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
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data } = await http.get(process.env.API_URI + "student");
  console.log(data);
  return {
    props: {
      students: data,
    },
  };
};
