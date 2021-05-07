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

  useEffect(() => {
    loadAllRestaurants();
    if (url) {
      handleSubmit();
    }
  }, [url]);

  const loadAllRestaurants = async () => {
    const url = "/api/v1/restaurants/getAllCuisineType";
    axios.get(url).then((res) => {
      const { restaurants } = res.data;
      console.log(restaurants);
      setLoadCuisineType(restaurants);
      console.log(loadCuisineType)
    });
  };

  const { auth } = useSelector((state) => ({ ...state }));

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

  const MenuUpload = () => {
    if (image) {
      uploadPicture();
    } else {
      handleSubmit();
    }
  };

  const LoadCuisineTypeCuisine = ({ cuisine_type, id }) => {
    //console.log(id)
    return <option value={id}>{cuisine_type}</option>;
  };

  return (
    <div>
      {/*FRONTEND TODO*/}
      {/* Style this form w/o using needing to use <br/> b/c there's a better approach*/}
      {/* Hint: Display flex, flex-direction: column  Ex:RestaurantRegistration.js*/}
      {/* Might need to separate label/input as their own */}
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
                <br/>
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
    </div>
  );
};
export default RestaurantMenu;
