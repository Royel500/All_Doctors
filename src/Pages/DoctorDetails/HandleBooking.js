import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoreBooking = () => {
    const storeBooking = localStorage.getItem('booking');
    if (storeBooking) {
        const storeBookingData = JSON.parse(storeBooking);
    
        return storeBookingData;
    } else {
       
        return [];
    }
};
const addToStoreBD = (id) => {
    const storeBookData = getStoreBooking();
    if (storeBookData.includes(id)) {
   
        toast.error('This appointment is already booked!');
    } else {
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem('booking', data);

        toast.error('This appointment successfully booked!');
    }
};

const removeFromStoreBD = (id) => {
    const storeBookData = getStoreBooking();
    const updatedData = storeBookData.filter((storedId) => parseInt(storedId) !== id);
    localStorage.setItem('booking', JSON.stringify(updatedData));
   
    toast.info('Appointment successfully canceled!');
};

export { addToStoreBD, getStoreBooking, removeFromStoreBD };