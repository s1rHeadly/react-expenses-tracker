import React from "react";
import Item from "./Item";

const ItemsList = ({expenses}) => {
  let content = 'Sorry there are no items yet';
  if(expenses.length > 0){
    content = expenses.map((item) => <Item item={item} key={item.id}/> )
  }
  return (
    <>
      <h3>History</h3>
      <ul className="list">
       {content}
      </ul>
    </>
  );
};

export default ItemsList;
