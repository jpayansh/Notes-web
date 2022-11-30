import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SelectContext } from "./SelectContext";
function Header() {
  const { Data, setData } = useContext(SelectContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function click(id, title, body) {
    navigate("/e", { state: { key: id, title: title, body: body } });
  }

  return (
    <>
      <div className="actions">
        <div className="actions_container ">
          <input
            id="search-text"
            type="text"
            class="input"
            placeholder="Filter todos"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>

      {Data ? (
        Data.filter((post) => {
          if (query === "") {
            return post;
          } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((data) => {
          return (
            <div className="container">
              <div id="notes">
                <div
                  className="list_item"
                  onClick={() => {
                    click(data.id, data.title, data.body);
                  }}
                >
                  <p className="list_item_title">{data.title}</p>
                  <p className="list_item_subtitle">
                    Last Edited a few minutes ago...
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container">
          <p>Please Provide Some Notes</p>
        </div>
      )}
      <div className="container">
        <Link to="/s">
          <button id="create_note" className="button">
            Create Note
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
