import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./DelivererMainMenu.css";


const DelivererMainMenu = ({deliverer}) => {
    return (
        <div className = 'heading'>
            <h1 >
                Deliverer Name
            </h1>

            <h6>
                Number of Orders Completed:
            </h6>

        <div>
            <button className = 'button'>
                Customer Reviews
            </button>

            <button className = 'button'>
                Orders
            </button>

            <button className = 'button'>
                My Performance
            </button>
        </div>
            
        </div>
    );
}

export default DelivererMainMenu