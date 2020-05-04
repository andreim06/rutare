import React, { Component } from "react";
class Contact extends Component {
  render() {
    const stil_hr = {
      borderTop: "1px solid grey",
      width: "70%",
    };
    return (
      <>
        <h3 className="mt-5">Contact</h3>
        <hr style={stil_hr} />
        <p>
          Pagina <em>Contact</em>.
        </p>
      </>
    );
  }
}

export default Contact;
