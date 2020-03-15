import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fetch from "./Fetch";

const Forms: React.FC<IFormsProps> = props => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  let handleChange = (e: string, id: string) => {
    if (id === "name") {
      setName(e);
    } else if (id === "msg") {
      setMsg(e);
    }
  };

  let handleClick = () => {
    if (name !== "" && msg !== "") {
      Fetch(
        {
          user: name,
          text: msg
        },
        "/api/chirps",
        "POST"
      );
    }
  };

  return (
    <form>
      <div className="form-group col-sm-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={e => handleChange(e.target.value, "name")}
        />
        <small id="nameMsg" className="form-text text-muted">
          We plan to stalk you.
        </small>
      </div>
      <div className="form-group col-sm-4">
        <label htmlFor="msg">Msg</label>
        <input
          type="text"
          className="form-control"
          id="msg"
          value={msg}
          onChange={e => handleChange(e.target.value, "msg")}
        />
      </div>
      <Link to="/">
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}
        >
          Submit
        </button>
      </Link>
    </form>
  );
};

export interface IFormsProps {}

export interface IFormsState {}

export default Forms;
