import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './OurTeam.css';

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'Role of the team member', imageUrl: 'team-member-1.jpg' },
    { id: 2, name: 'Team Member 2', role: 'Role of the team member', imageUrl: 'team-member-2.jpg' },
    { id: 3, name: 'Team Member 3', role: 'Role of the team member', imageUrl: 'team-member-3.jpg' },
    { id: 4, name: 'Team Member 4', role: 'Role of the team member', imageUrl: 'team-member-4.jpg' },
    { id: 5, name: 'Team Member 5', role: 'Role of the team member', imageUrl: 'team-member-5.jpg' },
    { id: 6, name: 'Team Member 6', role: 'Role of the team member', imageUrl: 'team-member-6.jpg' },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto py-12 px-32">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map(member => (
          <div key={member.id} className="p-4">
            <div className="rounded-lg hover:shadow-md p-6 text-center hover:bg-slate-300">
              <img className="h-40 w-40 bg-slate-700 object-cover rounded-full mx-auto" src={member.imageUrl} alt='Member.png' />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} custom-arrow custom-next-arrow`}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} custom-arrow custom-prev-arrow`}      onClick={onClick}
    />
  );
}

export default OurTeam;
