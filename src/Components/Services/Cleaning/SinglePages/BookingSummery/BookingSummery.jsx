import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function BookingSummery() {

    const [quantity, setQuantity] = useState(1);
    const [prefferableTime, setPrefferableTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const { id } = useParams();


    const handleQuantity = (e) => {
        const newQuantity = parseInt(e.target.value, 10) || 1;
        setQuantity(newQuantity);
        setTotalPrice(newQuantity * price);
    };
    
    const handleTime = (e) => {
        setPrefferableTime(e.target.value);
    };
    
    const handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    };


   const userInfo = JSON.parse(localStorage.getItem('user-info'));
   const userId = userInfo ? userInfo.id : null;


    useEffect(() => {
        singleService(id);
    }, [id]);




    const singleService = async (id) => {
        let result = await fetch(`http://127.0.0.1:8000/api/singleService/${id}`, {
            method: "GET"
        });
        result = await result.json();
        setData([result]);
        setPrice(result.price);
        setTotalPrice(result.price);
    };

    const getFutureDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 1); // Add one day
        return today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };

    const handleBookingSummery = async (e) => {
        e.preventDefault();
        
        let response = await fetch("http://127.0.0.1:8000/api/storeBooking",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                user_id: userId,
                service_id: id, 
                prefferable_time: prefferableTime,
                quantity: quantity,
                total_price: totalPrice,
                payment_method: paymentMethod,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            alert('Booking confirmed successfully');
            navigate('/AddressPage')
        } else {
            alert('Error confirm booking: ' + result.message);
        }
    }




    return (
        <>
            <section>
                {
                    data.map((item) =>

                        <div key={item.id} className="max-w-3xl mx-auto p-6 bg-white my-3 shadow-md rounded-md">
                            <h2 className="text-3xl font-bold mb-6">Review and Payment</h2>

                            {/* Booking Summary */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                                <div className="bg-gray-100 flex flex-col gap-3 p-4 rounded-md">
                                    <p><strong>Service :</strong> {item.name}</p>
                                    <p><strong>Date of service :</strong> {getFutureDate()}</p>
                                    <p><strong>Select your day time to start : <input type="time" value={prefferableTime} onChange={handleTime} /></strong></p>
                                    <strong>Quantity :<input type="number" min='1' value={quantity} onChange={handleQuantity} className='w-16 px-2 bg-gray-200 border rounded-md' /></strong>
                                    <p><strong>Total Price :</strong>₹{totalPrice}</p>



                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                                        <div className="flex items-center mb-2">
                                            <input type="radio" name="paymentMethod" value='cod' checked={paymentMethod === 'cod'} onChange={handlePaymentMethod} className="form-radio h-5 w-5 text-blue-600" />
                                            <label className="ml-2 text-gray-700">Cash on Delivery</label>
                                        </div>
                                        <div className="flex items-center mb-2 ">
                                            <input type="radio" name="paymentMethod" value='gpay' checked={paymentMethod === 'gpay'} onChange={handlePaymentMethod} className="form-radio h-5 w-5 text-blue-600" />
                                            <label className="ml-2 text-gray-700">Gpay</label>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <input type="radio" name="paymentMethod" value='card' checked={paymentMethod === 'card'} onChange={handlePaymentMethod} className="form-radio h-5 w-5 text-blue-600" />
                                            <label className="ml-2 text-gray-700">Card</label>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex justify-between">
                                    <button type="submit" onClick={handleBookingSummery} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Continue</button>
                                    <Link to='/services'><button className="bg-slate-500 text-white px-6 py-2 rounded-md hover:bg-slate-600">Back</button></Link>
                                </div>
                            </div>
                        </div>

                    )
                }



            </section >
        </>
    );
}

export default BookingSummery
