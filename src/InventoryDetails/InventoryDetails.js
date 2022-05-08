import { Link } from 'react-router-dom';
import './inventory.css'
const InventoryDetails = ({ services, handleDelivered }) => {
    
    return (
        <div className='inventory-container'>
            <div><img src={services.image} alt="" /></div>
            <div className='inventory-details'>
                <div>
                    <h4>Name : {services.name}</h4>
                    <h5>Price :${services.price}</h5>
                    <h5>Quantity : {services.quantity}</h5>
                    <h5>{services.description}</h5>
                </div>
                <div>
                    <button onClick={() => handleDelivered(services._id)}>Delivered</button>
                    <Link to={`/update/${services._id}`}><button>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;