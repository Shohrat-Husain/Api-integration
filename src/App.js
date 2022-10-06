import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getApi = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className=" container abc">
      {users.map((curElem) => {
        return (
          <div className="my-5 col-md-4 text-center  ">
            <div className="card   " style={{ width: "18rem" }}>
              <img
                src={curElem.avatar_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
