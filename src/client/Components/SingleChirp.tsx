import React, { useState, useEffect } from "react";
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import Fetch from "./Fetch";

let SingleChirp: React.FC<ISingleChirpProps> = ({
  match: {
    params: { id }
  }
}) => {
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
    if (name !== "name" && msg !== "msg") {
      Fetch(
        {
          user: name,
          text: msg
        },
        `/api/chirps/${id}`,
        "PUT"
      );
    }
  };

  let handleDelete = () => {
    if (name !== "name" && msg !== "msg") {
      Fetch(
        {
          user: name,
          text: msg
        },
        `/api/chirps/${id}`,
        "DELETE"
      );
    }
  };

  let chirpChirp = async () => {
    try {
      let res = await fetch(`/api/chirps/${id}/`);
      let achirp = await res.json();
      setName(achirp.user);
      setMsg(achirp.text);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chirpChirp();
  }, []);

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
          Save Edit
        </button>
      </Link>
      <Link to="/">
        <button
          className="btn btn-primary ml-3"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
      </Link>
    </form>
  );
};

export interface ISingleChirpProps
  extends RouteComponentProps<{ id: string }> {}

export interface ISingleChirpState {}

export default SingleChirp;
