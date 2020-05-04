import React, { Component } from "react";
class Noutati extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const noutati = {
      lista: { textAlign: "left" },
      lspan: { fontWeight: "bold" },
    };
    const lista = this.props.listaNoutati.map((item) => (
      <p key={item.id} style={noutati.lista}>
        <span style={noutati.lspan}>{item.titlu}: </span>
        {item.descriere}
      </p>
    ));

    const stil_hr = {
      borderTop: "1px solid grey",
      width: "70%",
    };

    return (
      <>
        <h3 className="mt-5">Noutăți</h3>
        <hr style={stil_hr} />
        {lista};
      </>
    );
  }
}

export default Noutati;
