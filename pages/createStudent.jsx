import React, { useState } from "react";
import Layout from "../components/Layout";
import validate from "../helpers/validate";
import http from "../config";
import styles from "./student.module.css";

const createStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = async (e) => {
    debugger;
    e.preventDefault();
    if (name && email && message) {
      try {
        setDisabled(true);

        const inputs = {
          email: email,
          name: name,
          message: message,
        };

        const validation = await validate(inputs);
        debugger;
        if (
          validation.email !== undefined ||
          validation.name !== undefined ||
          validation.message !== undefined
        ) {
          if (validation.email) {
            setError(validation.email);
          }
          if (validation.name) {
            setError(validation.name);
          }
          if (validation.message) {
            setError(validation.message);
          }
          setDisabled(false);
          return;
        } else {
          setError("");
          await saveContact(email, name, message);
          setDisabled(false);
        }
      } catch (err) {
        setError(err);
        setDisabled(false);
      }
    } else {
      setError("Please Enter name, email and message.");
      setDisabled(false);
      return;
    }
  };

  const saveContact = async (email, name, message) => {
    debugger;
    try {
      await http
        .post(process.env.API_URI + "contact", {
          email: email,
          name: name,
          message: message,
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

  const clearField = () => {
    setMessage("");
    setEmail("");
    setMessage();
  };

  return (
    <Layout>
      <div className={styles.contact}>
        <span style={{ color: "black", textAlign: "center" }}>{msg} </span>
        <form onSubmit={(e) => submitHandler(e)}>
          <h2>Contact</h2>
          {error !== "" ? (
            <div className="error">
              <span style={{ color: "red" }}>{error} </span>
            </div>
          ) : (
            ""
          )}
          <p type="Name:">
            <input
              placeholder="Write your name here..."
              className={styles.inputbox}
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p type="Email:">
            <input
              placeholder="Let us know how to contact you back..."
              className={styles.inputbox}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p type="Message:">
            <textarea
              placeholder="What would you like to tell..."
              className={styles.inputbox}
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
          <button
            className={styles.btn_contact}
            disabled={disabled}
            type="submit"
          >
            Send Message
          </button>
          <div className={styles.con_footer}>
            <span className="fa fa-phone" />
            +8801722536673
            <span className="fa fa-envelope-o" /> netsazzad@gmail.com
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default createStudent;
