import React, { useEffect, useState } from 'react';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications for the logged-in user
        fetch('http://127.0.0.1:8000/api/notifications/63') // replace '1' with dynamic user ID
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setNotifications(data))
            .catch(error => console.log(error));
    }, []);

    const markAsRead = (id) => {
        fetch(`http://127.0.0.1:8000/api/notifications/read/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Update state to remove the read notification
                setNotifications(notifications.filter(n => n.id !== id));
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h3 className='text-2xl font-bold'>Notifications</h3>
            <hr />
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        {notification.message}
                        <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;

