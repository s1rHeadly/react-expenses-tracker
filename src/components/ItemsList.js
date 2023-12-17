import React from "react";

const ItemsList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Flower <span>-20</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="plus">
          Salary <span>+300</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="minus">
          Book <span>-10</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="plus">
          Camera <span>+150</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="plus">
          {" "}
          <span>+0</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="plus">
          items <span>+30</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="plus">
          {" "}
          <span>+30</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
};

export default ItemsList;
