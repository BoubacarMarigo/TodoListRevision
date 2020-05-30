import React from "react";

import "../styles/card-style.css";

class CardList extends React.Component {
  render = () => {
    return (
      <div className="cardstyle">
        <h1>{this.props.name}</h1>
      </div>
    );
  };
}

export default CardList;
