import React, { useEffect, useState } from 'react';
import MuItemDetails from './MuItemDetails';

const MyItem = () => {
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch('https://pure-castle-07488.herokuapp.com/getService', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(res => res.json())
            .then(data => setMyItem(data));
    }, [])
    return (
        <div>
            {
                myItem.map(item => <MuItemDetails
                    key={item._id}
                    item={item}
                ></MuItemDetails>)
                
            }

            
        </div>
    );
};

export default MyItem;