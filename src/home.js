import React, { Component } from "react";

class Home extends Component {
  render() {
    const stil_hr = {
      borderTop: "1px solid grey",
      width: "70%",
    };
    return (
      <>
        <h3 className="mt-5">Home</h3>
        <hr style={stil_hr} />
        <p>
          Pagina <em>Home</em>.
        </p>
      </>
    );
  }
}

export default Home;
