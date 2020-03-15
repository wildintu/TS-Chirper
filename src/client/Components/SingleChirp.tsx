import React, { useState, useEffect } from "react";
import { useParams, RouteComponentProps, Link } from "react-router-dom";
import Update from "./Update";

let SingleChirp: React.FC<ISingleChirpProps> = ({
  match: {
    params: { id }
  }
}) => {
  const [achirp, setSingleChirp] = useState([]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  // let { id } = useParams();

  let handleChange = (e: string, id: string) => {
    if (id === "name") {
      setName(e);
    } else if (id === "msg") {
      setMsg(e);
    }
  };

  let handleClick = () => {
    if (name !== "name" && msg !== "msg") {
      Update({
        user: name,
        text: msg
      });
    }
    alert("hey");
  };

  let chirpChirp = async => {
    try {
      const fetchChirp = async () => {
        let res = await fetch("/api/chirps/:id/admin");
        let achirp = await res.json();
      };
    } catch (error) {
      console.log(error);
    }
    setSingleChirp(achirp);
    console.log(achirp);
  };

  useEffect(() => {
    chirpChirp(achirp);
  }, []);

  return (
    <form>
      <div className="form-group col-sm-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
            value={ name }
            onChange={e => alert(e.target.value, "name")}
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
            value ={ msg }
            onChange={e => alert(e.target.value, "msg")}
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

export interface ISingleChirpProps
  extends RouteComponentProps<{ id: string }> {}

export interface ISingleChirpState {
  achirp: string;
}

export default SingleChirp;
