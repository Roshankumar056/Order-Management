import React from "react";
import "./ViewItems.css";
import { item_list } from "../../assets/assets";
const ViewItems = ({category,setCategory}) => {

  return (
    <div className="view-item" id="view-item">
      <h1>Explore our items</h1>
      <p className="view-item-text">
        Whether you're shopping for the latest tech, refreshing your wardrobe,
        or stocking up on everyday essentials, we've got you covered with a
        handpicked selection just for you.
      </p>

      <div className="view-item-list">
        {item_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.item_name ? "All":item.item_name)} key={index} className="view-item-list-item">
              <img className={category===item.item_name ? "active":""} src={item.item_img} alt="" />
              <p>{item.item_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ViewItems;
