import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CleaningCard({ data }) {

  const [service, setService] = useState([]);

  const navigate = useNavigate();

  //Displaying the service based on search input length 

  useEffect(() => {

    if (data.length === 0) {

      const displayDefaultList = async () => {
        let result = await fetch("http://127.0.0.1:8000/api/userServiceList");
        result = await result.json();
        setService(result);
      };
      displayDefaultList();

    } else {
      setService(data);
    }

  }, [data]);

  const handleCardClick = (id) => {
    navigate(`/services/singleservicepage/${id}`);
  };

  const textLength = (text, maxlength) => {
    if (text.length <= maxlength) {
      return text;
    }
    return text.slice(0, maxlength) + '...';
  };




  return (
    <>
      <section className="mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Home cleaning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.map((item) => (
            <div key={item.id} onClick={() => handleCardClick(item.id)} className="border border-md rounded-lg hover:shadow-2xl hover:transition duration-700 ease-out p-6">
              <img className="w-full object-cover rounded-t-md" src={"http://127.0.0.1:8000/" + item.file_path} alt="" />
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
              <p className="mt-2 text-gray-600">{textLength(item.description, 85)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Office cleaning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </section>
    </>
  );
}

export default CleaningCard;
