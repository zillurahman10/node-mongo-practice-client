import React from 'react';

const ShowPd = ({ pd }) => {
    const { name, price } = pd
    const del = () => {
        fetch('', {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }

        })
    }
    return (
        <div>
            <h4>{name}</h4>
            <p>Price : {price}</p>
            <button onClick={del}>delete</button>
        </div>
    );
};

export default ShowPd;