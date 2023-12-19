import React from "react";
import Item from "./Item";

const ItemsList = ({expenses, onDeleteItem}) => {
  let contentList = 'Please add an item to your list';
  if(expenses.length > 0){
    contentList = expenses?.map((item) => <Item item={item} key={item.id} onDeleteItem={onDeleteItem}/> )
  }
  return (
    <>
      <h3>History</h3>
      <ul className="list">
       {contentList}
      </ul>
    </>
  );
};

export default ItemsList;
