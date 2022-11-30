import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SelectContext } from "./SelectContext";
function Epage() {
  const location = useLocation();
  const { Data, setData } = useContext(SelectContext);
  function remove() {
    setData(Data.filter((Data) => Data.id !== location.state.key));
  }

  return (
    <>
      <div class="container">
        <input
          type="text"
          name="title"
          id="note-title"
          class="title-input"
          value={location.state.title}
        />
        <textarea
          name="body"
          id="note-body"
          class="body-input"
          cols="30"
          rows="10"
          value={location.state.body}
        ></textarea>
        <div>
          <Link to="/">
            <button
              id="remove-note"
              class="button button--secondary"
              onClick={() => {
                remove();
              }}
            >
              Remove Note
            </button>
          </Link>
          <Link to="/">
            <button
              id="remove-note"
              class="button button--secondary"
              style={{ marginLeft: "20px" }}
            >
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Epage;
