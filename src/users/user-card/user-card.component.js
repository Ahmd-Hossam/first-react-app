import React, { Component, Fragment } from "react";
import UserService from "./user.service";
export class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      userData: UserService,
    };
  }
  render() {
    return (
      <Fragment>
        <section className="container">
          <div className="row">
            {this.state.userData.map((ele, index) => (
              <div className="col-4 mt-3" key={ele.id}>
                <div className="card p-2">
                  <strong style={{ color: "green" }}> Name : {ele.name}</strong>
                  <strong> Age : {ele.Age} </strong>
                  <strong> Address : {ele.Address}</strong>
                  <strong> Phone : {ele.phone}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default UserCard;
