import React, { Component } from "react";
class Despre extends Component {
  render() {
    const stil_hr = {
      borderTop: "1px solid grey",
      width: "70%",
    };
    return (
      <>
        <h3 className="mt-5">Despre noi</h3>
        <hr style={stil_hr} />
        <p>
          Pagina <em>Despre noi</em>.
        </p>
      </>
    );
  }
}

export default Despre;
