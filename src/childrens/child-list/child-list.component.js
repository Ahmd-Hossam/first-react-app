import React, { Component } from "react";
import ChildCard from "../child-card/child.card";

export class Childrens extends Component {
  render() {
    const childrens = [
      {
        id: 0,
        name: "Ahmed",
        Age: 50,
        Address: "Cairo",
        phone: "0120 931 8297",
        gender: "male",
      },
      {
        id: 1,
        name: "Mayar",
        Age: 50,
        Address: "Cairo",
        phone: "0120 931 8297",
        gender: "female",
      },
    ];
    return (
      <div className="container">
        <h1 className="text-center"> Boys and girls </h1>
        <ChildCard data={childrens} color="red" />
      </div>
    );
  }
}

export default Childrens;
