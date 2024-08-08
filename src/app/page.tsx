'use client'

import { useEffect, useRef, useState } from "react";
import ResturantCardComponent, { withHighlyRatedResturantCardComponent } from "./components/ResturantCard";
import { RESTURANT_API_URL } from "./utils/constant";
import ShimmerComponent from "./components/Shimmer";

export default function Home() {

  const resturantDetails = useRef([]);
  const [listOfResturants, setListOfResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  
  const HighlyRatedResturant = withHighlyRatedResturantCardComponent(ResturantCardComponent); 

  useEffect(() => {
    const fetchResturantData = async () => {
      setIsLoading(true);
      fetch(RESTURANT_API_URL)
        .then((response) => response.json())
        .then((data) => {
          resturantDetails.current = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          //console.log('resturantDetails --- ', data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, resturantDetails);
          setListOfResturants(resturantDetails.current);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
          console.error("Error fetching the data:", error);
        });
    };

    fetchResturantData();
  }, []);

  

  const filterResturant = () => {
    const filterList = resturantDetails.current.filter(
      (resturant: any) => resturant.info.avgRating > 4
    );
    //console.log("filterList", filterList);
    setListOfResturants(filterList);
  }

  const searchResturant = () => {
    const filterList = resturantDetails.current.filter(
        (resturant: any) => resturant.info.name.toLowerCase().includes(searchText)
    );
    
    //console.log("filterList", filterList);
    setListOfResturants(filterList);
    console.log("Search resturant");
  }

  const resetResturant = () => {
    setListOfResturants(resturantDetails.current);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p1-5">
      <div className="res-container p1-5 pr-5">
        <div className="error-message">
            <p>{error}</p>
        </div>
        <div className="top-bar flex justify-between">
            <div className="filter-bar">
              <button className="filter-btn px-4 py-2 mr-5 bg-sky-500/100 rounded-xl" onClick={filterResturant}>
                  Top Rated
              </button>
              <button className="filter-btn px-4 py-2 bg-sky-500/100 rounded-xl" onClick={resetResturant}>
                  Reset
              </button>
            </div>
            <div className="serach-bar">
              <input
                  type="text"
                  className="search-input mr-5 border-black rounded-sm h-8 px-2"
                  placeholder="Search..."
                  value= {searchText}
                  onChange={(e) => {setSearchText(e.target.value)}}
              ></input>
              <button className="px-4 py-2 mr-5 bg-sky-500/100 rounded-xl" onClick={searchResturant}>
                  Search
              </button>
            </div>
        </div>
        {isLoading ? (
            <ShimmerComponent />
        ) : (
            <div className="card-container flex flex-wrap justify-around">
            {
              listOfResturants?.map((hotel: any) => (
                  hotel.info.avgRating > 4 ? <HighlyRatedResturant key={hotel.info.id} resData={hotel} /> :
                  <ResturantCardComponent key={hotel.info.id} resData={hotel} />
              ))
            }
            </div>
        )}
    </div>
    </main>
  );
}
