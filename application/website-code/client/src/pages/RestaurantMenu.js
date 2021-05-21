import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import axios from "axios";

const RestaurantMenu = (props) => {
  const [items_name, setItemsName] = React.useState("");
  const [cuisine_type, setCuisineType] = React.useState(2);
  const [loadCuisineType, setLoadCuisineType] = React.useState([]);
  const [price, setPricing] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setMenuImage] = React.useState("");
  const [url, setUrl] = React.useState(undefined);
  const [restaurantInfo, setRestaurantInfo] = React.useState({});
  const [restaurantName, setRestaurantName] = React.useState("")
  const [restaurantStatus, setRestaurantStatus] = React.useState("")
  const [menu, setMenu] = React.useState([]);

  const { auth } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadAllRestaurants();
    if (auth) {
      LoadRestaurantDetails();
      console.log(restaurantInfo)
    }
    if (url) {
      handleSubmit();
    }
    
  }, [url, auth, ]);

  const loadMenu = async (restaurantID) => {
    const url = `/api/v1/restaurants//getAllMenuItems?restaurantId=${restaurantID}`;
    try{
    await axios.get(url).then((res) => {
      setMenu(res.data.menuItems);
      console.log(res.data.menuItems)
    })}catch (err) {
      console.log(err);
      //setMenu(0);
    }
  };

  const loadAllRestaurants = async () => {
    const url = "/api/v1/restaurants/getAllCuisineType";
    axios.get(url).then((res) => {
      const { restaurants } = res.data;
      console.log(restaurants);
      setLoadCuisineType(restaurants);
      console.log(loadCuisineType)
    });
  };


  const handleSubmit = async () => {
    const data = {
      items_name,
      price,
      description,
      image: url,
      owner_id: auth.userID,
      fk_cuisine_type_id: cuisine_type
    };
    try {
      const res = await axios.post(
        "/api/v1/restaurants/uploadRestaurantMenu",
        data
      );
      console.log("MENU INFORMATION: ", res);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadRestaurantDetails = async () => {
    const url = `/api/v1/restaurants/getRestaurantByOwner?id=${auth.userID}`;
    await axios.get(url).then( (res) => {
      const { restaurant } = res.data;
      console.log(restaurant);
      //setLoadCuisineType(restaurant);
      setRestaurantInfo(restaurant[0]);
      console.log("this: ", restaurantInfo)
      setRestaurantName(restaurant[0].restaurant_name);
      if (restaurant[0].isApproved == 0) {
        setRestaurantStatus("Your restaurant is under review by admin")
      } else {
        setRestaurantStatus("Your restaurant is approved to sell")
      }
      loadMenu(restaurant[0].id);
      //console.log(loadCuisineType)
    });
  };

  const uploadPicture = () => {
    // upload images using cloudinary
    // and store url in db
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "restaurant_menu");
    data.append("cloud_name", "gatordash");
    fetch(
      "https://api.cloudinary.com/v1_1/gatordash/image/upload",

      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const resetFields = () => {
    setItemsName("");
    setPricing("");
    setDescription("");
    setMenuImage("");
  }

  const MenuUpload = () => {
    if (image) {
      uploadPicture();
    } else {
      handleSubmit();
    }
    resetFields();
  };

  const LoadCuisineTypeCuisine = ({ cuisine_type, id }) => {
    return <option value={id}>{cuisine_type}</option>;
  };

  return (
    <div>
      {/*FRONTEND TODO*/}
      {/* Style this form w/o using needing to use <br/> b/c there's a better approach*/}
      {/* Hint: Display flex, flex-direction: column  Ex:RestaurantRegistration.js*/}
      {/* Might need to separate label/input as their own */}
      <section className='jumbotron bg-light '>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md text-center align-self-center'>
              <h1>{restaurantName}</h1>
              <br />
              <h3>{restaurantStatus}</h3>
            </div>
          </div>
        </div>
      </section>
      <section className='jumbotron bg-dark '>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md text-center text-white align-self-center'>
              <h2>Add your latest menu</h2>
              <p>Upload your newest menu item to attract customers</p>
            </div>
            <div className='col-md text-white text-center '>
              <form
                className='container border rounded'
                style={{ paddingBottom: "20px", paddingTop: "20px" }}
                onSubmit={(e) => e.preventDefault()}
              >
                <label>
                  Food Name:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={items_name}
                    onChange={(e) => setItemsName(e.target.value)}
                  />
                </label>
                <br />
                <div>
                  <label>
                    Cuisine Type:
                </label>
                  <br />
                  <select className=''
                    onChange={(e) => (setCuisineType(e.target.value))}>
                    <option value='2'>Cuisine</option>
                    {loadCuisineType.map((restaurant, id) => (
                      LoadCuisineTypeCuisine(restaurant)
                    ))}
                  </select>
                </div>
                <label>
                  Price:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={price}
                    onChange={(e) => setPricing(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Description:
                  <br></br>
                  <input
                    type='text'
                    style={{ width: "40vw" }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
                <br />
                <label> Upload Image </label>
                <br />
                <input
                  type='file'
                  name='uploadImage'
                  className='formButton formUploadButton'
                  accept='image/*'
                  onChange={(e) => setMenuImage(e.target.files[0])}
                />
                <br />
                <br />
                <div className='text-center'>
                  <button
                    className='btn btn-primary'
                    onClick={() => MenuUpload()}
                  >
                    Submit Menu
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='jumbotron bg-light '>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md text-center align-self-center'>
              <p>{JSON.stringify(menu)}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RestaurantMenu;
