import { FOOD_DUMMY_IMAGE_URL, MENU_IMAGE_URL } from "../../utils/constant";
//import { addItem, removeItem } from "../../store/reducers/cartSlice";

const ItemList = ({restaurantMenu, isCartPage = false}) => {

    return (
      <div className="food-card flex justify-between items-center px-10 py-5 m-4">
        <div className="food-details">
          <h4>{restaurantMenu?.card?.info?.name}</h4>
          <span>Price - {restaurantMenu?.card?.info?.price/100}</span>
        </div>
        <div className="food-right-cont flex flex-col justify-center">
          <img src={ MENU_IMAGE_URL + (restaurantMenu?.card?.info?.imageId || FOOD_DUMMY_IMAGE_URL)} alt="food-imageId"></img>
          {
            isCartPage ? <button className="p-2 mt-5 bg-sky-500/100 rounded-xl">Remove</button> :
            <button className="p-2 mt-5 bg-sky-500/100 rounded-xl">Add</button>

          }
        </div>
        </div>
    )
}

export default ItemList;