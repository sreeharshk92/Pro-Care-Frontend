import React, { useState, useEffect } from 'react';

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        let result = await fetch("http://127.0.0.1:8000/api/notifications");
        result = await result.json();
        setNotifications(result);
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            {notifications.map((notification, index) => (
                <div key={index} className={`p-4 mb-4 text-sm ${notification.data.status === 'accepted' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                    {notification.data.status === 'accepted' ? 'Booking Confirmed' : 'Booking Rejected'}
                </div>
            ))}
        </div>
    );
}

export default Notifications;
