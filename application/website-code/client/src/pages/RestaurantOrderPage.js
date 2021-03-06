import React, { useState, useEffect } from "react";
import "../styling/RestaurantOrderPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/DelivererMainMenu.css";
import InfoCard from "../components/InfoCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setId } from "../redux/actions/customerActions";

const RestaurantOrderPage = (name) => {
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    const [pickupOrders, setPickupOrders] = useState([]);
    const [restaurantName, setRestaurantName] = useState([]);
    const dispatch = useDispatch();

    const { auth } = useSelector((state) => ({ ...state }));

    const handleClick = () => {
        history.push("/HP/RestaurantDeliveryOrderDetail");
    };

    const handleClick2 = () => {
        history.push("/HP/RestaurantPickupOrderDetails");
    };

    useEffect(() => {
        loadDeliveryOrder();
        loadPickupOrder();
    }, []);


    const LoadRestaurantDetails = async () => {

    };


    const loadDeliveryOrder = async () => {
        const url = `/api/v1/orders/deliveryOrders`;
        try {
            axios
                .get(url)
                .then(async (res) => {
                    console.log(res);

                    let myOrders = res.data.orders;
                    let resName = "";
                    const url = `/api/v1/restaurants/getRestaurantByOwner?id=${auth.userID}`;
                    await axios.get(url).then((res) => {
                        const { restaurant } = res.data;
                        console.log(restaurant);
                        //setLoadCuisineType(restaurant);
                        //setRestaurantInfo(restaurant[0]);
                        //console.log("this: ", restaurantInfo);
                        resName = restaurant[0].restaurant_name;
                    });

                    for (let i = 0; i < myOrders.length; i++) {
                        console.log(resName)
                        if (myOrders[i].RestaurantName != resName) {
                            myOrders.splice(i, 1)
                            i--;
                        }
                    }


                    setOrders(myOrders);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
            //setMenu(0);
        }
    };

    const loadPickupOrder = async () => {
        const url = `/api/v1/orders/pickupOrders`;
        try {
            axios
                .get(url)
                .then(async (res) => {
                    console.log(res);

                    let myOrders = res.data.orders;
                    let resName = "";
                    const url = `/api/v1/restaurants/getRestaurantByOwner?id=${auth.userID}`;
                    await axios.get(url).then((res) => {
                        const { restaurant } = res.data;
                        console.log(restaurant);
                        //setLoadCuisineType(restaurant);
                        //setRestaurantInfo(restaurant[0]);
                        //console.log("this: ", restaurantInfo);
                        resName = restaurant[0].restaurant_name;
                    });
                    console.log(myOrders.length)
                    for (let i = 0; i < myOrders.length; i++) {
                        console.log(resName)
                        console.log(myOrders)
                        if (myOrders[i].RestaurantName != resName) {
                            myOrders.splice(i, 1)
                            i--;
                        }
                    }

                    setPickupOrders(myOrders);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className='Title'>
                <p>
                    <b>Orders placed</b>
                </p>
            </div>
            <h3 className='text-center'>Delivery Orders</h3>
            <h1 className='overHeading'>
                <div className='orderSection'>
                    {orders &&
                        orders.map((orders) => (
                            <div className='infoSheet'>
                                {console.log(orders)}
                                <InfoCard
                                    restaurantName={orders.RestaurantName}
                                    orderNumber={orders.id}
                                    timeCreated={orders.created}
                                    deliveryAddress={orders.delivery_address}
                                ></InfoCard>
                                <button
                                    className='order-btn btn-link btn btn-outline-success py-2 my-2'
                                    onClick={() => {
                                        dispatch(setId(orders));
                                        handleClick();
                                    }}
                                >
                                    View Order
                </button>
                            </div>
                        ))}
                </div>
                <h3 className='text-center'>Pickup Orders</h3>
                <div className='orderSection'>
                    {pickupOrders &&
                        pickupOrders.map((orders) => (
                            <div className='infoSheet'>
                                {console.log(orders)}
                                <InfoCard
                                    restaurantName={orders.RestaurantName}
                                    orderNumber={orders.id}
                                    timeCreated={orders.created}
                                    deliveryAddress={orders.delivery_address}
                                ></InfoCard>
                                <button
                                    className='order-btn btn-link btn btn-outline-success py-2 my-2'
                                    onClick={() => {
                                        dispatch(setId(orders));
                                        handleClick2();
                                    }}
                                >
                                    View Order
                </button>
                            </div>
                        ))}
                </div>
            </h1>
            <hr></hr>
        </div>
    );
};

export default RestaurantOrderPage;
