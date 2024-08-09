'use client'

import { CDN_URL } from "@/app/utils/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";


const ResturantCardComponent = (props: any) => {
  const { resData } = props;
  const { 
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId
  } = resData?.info;
  const router = useRouter();

  return (
    <div className="res-card w-64 h-74 bg-[#f0f0f0] p-2 m-4 rounded-xl cursor-pointer" onClick={() => {router.push('/menu/' + resData?.info.id)}}>
      <div className="w-full h-1/2 overflow-hidden p-2 mb-2">
        <Image src={CDN_URL + cloudinaryImageId} width={230} height={150} alt="hotel-img"></Image>
      </div>
      <div className="hotel-details">
        <div className="hotel-name">
          <h4>{name}</h4>
          <span className="cuisine-name">{cuisines.join(", ")}</span>
        </div>
        <div className="hotel-rating flex">
          <h5>{avgRating} Star</h5>
          <h5>{sla.deliveryTime} min</h5>
          <h5>{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};


export default ResturantCardComponent;
