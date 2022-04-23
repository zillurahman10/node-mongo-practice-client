import React from 'react';

const AddPd = () => {
    const formOnSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value

        const pd = { name, price }

        //
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(pd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <form onSubmit={formOnSubmit}>
            <h2>Please add pd</h2>
            <input type="text" name='name' placeholder='name' />
            <br />
            <input type="number" name="price" id="" placeholder='Price' />
            <br />
            <input type="submit" value="Add pd" />
        </form>
    );
};

export default AddPd;