import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoreBooking = () => {
  const storeBooking = localStorage.getItem('booking');
  return storeBooking ? JSON.parse(storeBooking) : [];
};

const addToStoreBD = (id) => {
  const storeBookData = getStoreBooking();
  if (storeBookData.includes(id)) {
  
    toast.error('Appointment Already Booked!', {
      toastId: 'cancel-toast',
    });
  } else {
    storeBookData.push(id);
    localStorage.setItem('booking', JSON.stringify(storeBookData));

    toast.success('Appointment successfully booked!', {
      toastId: 'booked-toast',
    });
  }
};

const removeFromStoreBD = (id) => {
  const storeBookData = getStoreBooking();
  const updatedData = storeBookData.filter((storedId) => parseInt(storedId) !== id);
  localStorage.setItem('booking', JSON.stringify(updatedData));

  toast.error('Appointment canceled!', {
    toastId: 'cancel-toast',
  });
};

export { addToStoreBD, getStoreBooking, removeFromStoreBD };