import React from "react";
import style from "./child.module.css";
const ChildCard = ({ data, color }) => {
  let card = (
    <section className="container">
      <div className="row">
        {data.map((ele, index) => (
          <div className="col-4 mt-3" key={ele.id}>
            <div
              className="card p-2"
              style={{
                background: ele.gender === "male" ? "blue" : "purple",
                color: "#fff",
              }}
            >
              <strong style={{ color: color }}> Name : {ele.name}</strong>
              <strong className={style.blue}> Age : {ele.Age} </strong>
              <strong> Address : {ele.Address}</strong>
              <strong> Phone : {ele.phone}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return card;
};

export default ChildCard;
