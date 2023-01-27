import React from "react";
import classes from "../styles/home.module.css";

const Search = (props) => {
  return (
    <div className={classes.search}>
      <div className={classes.searchForm}>
        <input type="text" placeholder="find a user" />
      </div>
      <div className={classes.userChat}>
        <div className={classes.userChatInfo}>
          <span>Marcus</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
