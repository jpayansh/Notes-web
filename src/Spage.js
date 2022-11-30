import React from "react";
import { Link } from "react-router-dom";
import { useReducer, useContext } from "react";
import { SelectContext } from "./SelectContext";
function Spage() {
  const { Data, setData } = useContext(SelectContext);
  const initialState = {
    title: "",
    body: "",
    id: "",
  };

  function reduce(state, action) {
    switch (action.type) {
      case "title":
        return {
          ...state,
          [action.paload.name]: action.paload.value,
          [action.paload.key]: action.paload.id,
        };
    }
  }
  const [state, dispatch] = useReducer(reduce, initialState);
  const onSubmit = (e) => {
    setData([...Data, { ...state }]);
  };

  return (
    <>
      <div class="container">
        <input
          type="text"
          name="title"
          id="note-title"
          class="title-input"
          placeholder="Note title"
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: "title",
              paload: {
                name: e.target.name,
                value: e.target.value,
                id: e.timeStamp,
                key: "id",
              },
            })
          }
        />
        <textarea
          name="body"
          id="note-body"
          class="body-input"
          cols="30"
          rows="10"
          placeholder="Enter note text"
          value={state.body}
          onChange={(e) =>
            dispatch({
              type: "title",
              paload: { name: e.target.name, value: e.target.value },
            })
          }
        ></textarea>
        <Link to="/">
          <button
            id="remove-note"
            class="button button--secondary"
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Save Note
          </button>
        </Link>
      </div>
    </>
  );
}

export default Spage;
