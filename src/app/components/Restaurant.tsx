import ResturantCardComponent from "./ResturantCard";

export default function Restaurant({listOfResturants}: any) {
    //const HighlyRatedResturant = withHighlyRatedResturantCardComponent(ResturantCardComponent); 
    
    return (
        <div className="card-container flex flex-wrap justify-around">
            {
                listOfResturants?.map((hotel: any) => (
                    <ResturantCardComponent key={hotel.info.id} resData={hotel} />
                ))
            }
        </div>
    )
}