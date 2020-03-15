import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleChirp from "./SingleChirp"

const Chirps: React.FC<IChirpsProps> = props => {
  /* constructor(props) {
		super(props);
		this.state = {
			chirp: []
		}
	} */
  const [chirp, setChirp] = useState([]);

  let grabChirps = async () => {
    try {
      let r = await fetch("/api/chirps/");
      let chirp = await r.json();
      chirpArray(chirp);
    } catch (error) {
      console.log(error);
    }
  };

//   let handleClick = () => {
// 	{ SingleChirp }
//   };

  let chirpArray = (chirp: any) => {
    let keys = Object.keys(chirp);
    let arr = keys.map(element => {
      return chirp[element];
    });

    arr.splice(-1, 1);

    let cards = arr.map((element, index) => {
      return (
        <div className="card col-sm-4" key={index}>
          <div className="card-body">
            <h5 className="card-title">{element.user}</h5>
            <p className="card-text">{element.text}</p>
            <Link to={`/SingleChirp/${keys[index]}/admin`}>
              <button
                type="button"
                className="btn btn-info"
                // onClick={() => {
                //   handleClick();
                // }}
              >
                Admin Settings
              </button>
            </Link>
          </div>
        </div>
      );
    });
    //this.setState({chirp: cards})
    setChirp(cards);
  };

  useEffect(() => {
    grabChirps();
  }, []);

  return (
    <div>
      <Link to="/Forms" className="btn btn-success">
        Post to API
      </Link>
      {/* calling this.state.chirp */}
      {chirp}
    </div>
  );
};

export interface IChirpsProps {}

export interface IChirpsState {
  chirp: string;
}

export default Chirps;
