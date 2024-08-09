'use client'

import { Suspense, useEffect, useState } from "react";
import { MENU_API_URL } from "../../utils/constant";
import ItemList from "./ItemList";
import ShimmerComponent from "@/app/components/Shimmer";

type Params = {
  params: {
    id: string
  }
}

export default function Page({ params: { id } }:Params) {
    //const menu = useRef(null); 
    const [isLoading, setIsLoading] = useState(true);
    const [restaurantMenu, setRestaurantMenu] = useState<any | null>(null);
    const [restaurantDetails, setRestaurantDetails] = useState<any | null>(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMenuData = async () => {
            setIsLoading(true);
            fetch(MENU_API_URL.replace('{id}', id))
              .then((response) => response.json())
              .then((data) => {
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
          <Suspense fallback={<ShimmerComponent />}>
            <div className="menu-details">
              {
                restaurantMenu?.itemCards?.map((item: any) => (
                  <ItemList key={item?.card?.info?.id} resProps={{restaurantMenu:item, isCartPage: false}} />
                ))
              }
            </div>
          </Suspense>
        </div>
    )
}
