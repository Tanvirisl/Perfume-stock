import React from 'react';
import useService from '../Hooks/useService';
import InventoryDetails from '../InventoryDetails/InventoryDetails';

const Inventorys = () => {
    const [service] = useService();
    console.log(service)
    return (
        <div>
            <h2>this is inventory:{service.length}</h2>
            {
                service.map(services => <InventoryDetails
                    key={services._id}
                    services={services}
                ></InventoryDetails>)
            }
        </div>
    );
};

export default Inventorys;