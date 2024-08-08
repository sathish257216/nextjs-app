'use client'

import { useEffect, useState } from "react";
import { MENU_API_URL } from "../../utils/constant";
import ItemList from "./ItemList";

export default function Page({ params }) {
    //const menu = useRef(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [restaurantMenu, setRestaurantMenu] = useState<any | null>(null);
    const [restaurantDetails, setRestaurantDetails] = useState<any | null>(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMenuData = async () => {
            setIsLoading(true);
            fetch(MENU_API_URL.replace('{id}', params.id))
              .then((response) => response.json())
              .then((data) => {
                //menu.current = data.data.cards;
                //console.log('Menu --- ', data);
                setRestaurantDetails(data?.data?.cards[2]?.card?.card?.info);
                setRestaurantMenu(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
                setIsLoading(false);
              })
              .catch((error) => {
                setIsLoading(false);
                setError(error);
                console.error("Error fetching the data:", error);
              });
          };
          fetchMenuData();
    }, []);

    return (
      <div className="menu-container">
          <div className="hotel-details flex flex-col justify-center item-center">
              <h3>{restaurantDetails?.name}</h3>
              <h3>{restaurantDetails?.cuisines}</h3>
          </div>
          <div className="menu-details">
            {
              restaurantMenu?.itemCards?.map((item: any) => (
                <ItemList key={item?.card?.info?.id} restaurantMenu={item} />
              ))
            }
          </div>
        </div>
    )
}
