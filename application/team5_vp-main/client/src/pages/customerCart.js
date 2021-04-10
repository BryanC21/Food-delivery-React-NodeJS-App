import React from "react";
import { connect } from "react-redux";



const customerCart = () => {

    return (
        <div>
            <div className='jumbotron bg-dark'>


                <h2 className='head'>Resturant Name</h2>

            </div>
        </div>

    )
};

const mapStateToProps = (state) => {

    return {
        restaruant_menu: state.customerReducer.restaruant_menu,
    };
};

export default connect(mapStateToProps)(customerCart);