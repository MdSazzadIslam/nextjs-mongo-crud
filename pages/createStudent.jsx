import React, { useState } from "react";
import Layout from "../components/Layout";
import validate from "../helpers/validate";
import http from "../config";
//import Countries from "../components/Countries";
import styles from "./student.module.css";
import axios from "axios";

const createStudent = ({ countries }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [msg, setMsg] = useState("");

  const submitHandler = async (e) => {
    debugger;
    e.preventDefault();
    if (name && country && email && dob) {
      try {
        setDisabled(true);

        const inputs = {
          name: name,
          country: country,
          email: email,
          dob: dob,
        };

        const validation = await validate(inputs);
        debugger;
        if (
          validation.name !== undefined ||
          validation.country !== undefined ||
          validation.email !== undefined ||
          validation.dob !== undefined
        ) {
          if (validation.name) {
            setError(validation.name);
          }
          if (validation.country) {
            setError(validation.country);
          }
          if (validation.email) {
            setError(validation.email);
          }

          if (validation.dob) {
            setError(validation.dob);
          }
          setDisabled(false);
          return;
        } else {
          setError("");
          await saveStudent(name, country, email, dob);
          setDisabled(false);
        }
      } catch (err) {
        setError(err);
        setDisabled(false);
      }
    } else {
      setError("Please Enter name, email country, date of birth.");
      setDisabled(false);
      return;
    }
  };

  const saveStudent = async (name, country, email, dob) => {
    debugger;
    try {
      await http
        .post(process.env.API_URI + "student", {
          name: name,
          email: email,
          country: country,
          dob: dob,
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

  const countryHandler = (e) => {
    console.log(e.target.value);
  };

  const clearField = () => {
    setName("");
    setCountry("");
    setEmail("");
    setDob("");
    setError("");
  };

  return (
    <Layout>
      <div className={styles.contact}>
        <span style={{ color: "black", textAlign: "center" }}>{msg} </span>
        <form onSubmit={(e) => submitHandler(e)}>
          <h2>Add</h2>
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
          <p type="Country">
            {/*   <Countries
              countries={props.countries}
              onChange={(e) => countryHandler()}
              placeholder="Select you country"
              className={styles.inputbox}
            /> */}

            <select
              className={styles.inputbox}
              style={{ width: "100%" }}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Select you country"
            >
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </p>

          <p type="Email:">
            <input
              type="text"
              placeholder="Write your email here..."
              className={styles.inputbox}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p type="Date of birth:">
            <input
              type="date"
              placeholder="Write your date of birth here..."
              className={styles.inputbox}
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </p>
          <button
            className={styles.btn_contact}
            disabled={disabled}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(process.env.API_COUNTRIES);
  //console.log(data);
  return {
    props: {
      countries: data,
    },
  };
};

export default createStudent;
