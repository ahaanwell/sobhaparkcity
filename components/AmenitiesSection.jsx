/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";

export const amenitiesData = [
  { id: 1,  name: "Gymnasium",           image: "/images/amenities/gym.svg" },
  { id: 2,  name: "Swimming Pool",       image: "/images/amenities/swm.svg" },
  { id: 3,  name: "Yoga Pavilion",       image: "/images/amenities/yoga.svg" },
  { id: 4,  name: "Video Door Phone",    image: "/images/amenities/videos.svg" },
  { id: 5,  name: "Kids Activity Zone",  image: "/images/amenities/kids.svg" },
  { id: 6,  name: "Mini Theater",        image: "/images/amenities/mine.svg" },
  { id: 7,  name: "Aerobics Room",       image: "/images/amenities/tennis.svg" },
  { id: 8,  name: "Indoor Games Room",   image: "/images/amenities/chess.svg" },
  { id: 9,  name: "Club House",          image: "/images/amenities/disco-ball.svg" },
  { id: 10, name: "Dance/Music",         image: "/images/amenities/dance.svg" },
  { id: 11, name: "24/7 CCTV Monitoring",image: "/images/amenities/cctv.svg" },
  { id: 12, name: "Jogging Track",       image: "/images/amenities/jog.svg" },
  { id: 13, name: "Tennis Court",        image: "/images/amenities/tennis-court.svg" },
  { id: 14, name: "Amphitheatre",        image: "/images/amenities/amphitheatre.svg" },
  { id: 15, name: "EV Charging Points",  image: "/images/amenities/ev-charging.svg" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      aria-labelledby="amenities-heading"
      className="w-full bg-white px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="amenities-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Amenities
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    Sobha Parkcity is described as a residential development on Hennur Main Road in North Bangalore, with planned shared facilities for recreation, fitness, and everyday convenience. The available project information refers to more than 40 amenities and a clubhouse of approximately 50,000 sq. ft. The final amenity list and specifications should be confirmed through official project documents.
  </p>
</div>
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sobha Parkcity amenities"
        >
          {amenitiesData.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center justify-between w-full h-[150px] lg:h-[180px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] p-3 rounded-xl hover:border hover:border-gray-300 hover:shadow-md transition-all duration-300 bg-white"
            >
              <div className="w-full flex-1 flex items-center justify-center p-3 h-[60%]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[90%] object-contain"
                  loading="lazy"
                 
                />
              </div>

              <p className="text-center text-sm text-gray-700 font-light leading-tight pb-1">
                {item.name}
              </p>
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">Lifestyle Amenities</h3>

  <p>
    The planned clubhouse and common areas may provide spaces for residents to relax and participate in community activities. Buyers should check which facilities are included in the approved amenities plan.
  </p>

  <p>Potential facilities to look for in the official list include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Clubhouse and indoor recreational spaces</li>
    <li>Multipurpose hall</li>
    <li>Indoor games facilities</li>
    <li>Community gathering areas</li>
    <li>Seating and relaxation spaces</li>
  </ul>

  <p>
    The location and accessibility of these facilities within the development can influence how conveniently residents use them in their daily lives.
  </p>

  <h3 className="text-xl font-bold">Sports and Fitness Facilities</h3>

  <p>
    Fitness and recreational facilities can provide opportunities for exercise without requiring residents to travel outside the community. Their availability and design should be checked against the final amenities schedule.
  </p>

  <p>Facilities to verify may include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Gymnasium</li>
    <li>Walking or jogging paths</li>
    <li>Outdoor fitness areas</li>
    <li>Sports courts</li>
    <li>Yoga or meditation spaces</li>
  </ul>

  <p>
    The placement of these facilities, their operating hours, and the arrangements for resident access are practical considerations when evaluating the project.
  </p>

  <h3 className="text-xl font-bold">Family and Kids Amenities</h3>

  <p>
    Shared spaces designed for families can support outdoor activities and community interaction. However, the specific family and children's facilities planned for Sobha Parkcity should be confirmed before booking.
  </p>

  <p>Possible features to check in the official plan include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Children's play area</li>
    <li>Landscaped open spaces</li>
    <li>Family seating areas</li>
    <li>Community activity spaces</li>
    <li>Designated outdoor recreation areas</li>
  </ul>

  <p>
    Parents may also wish to review the distance between children's activity zones, residential towers, and vehicle movement areas to understand how these spaces are organised.
  </p>

  <h3 className="text-xl font-bold">Safety and Convenience Amenities</h3>

  <p>
    In a large residential development, access arrangements and common infrastructure play an important role in everyday usability. Buyers should confirm the safety and convenience features included in the approved project specifications.
  </p>

  <p>Important features to verify include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Controlled entry and visitor access</li>
    <li>CCTV surveillance in designated areas</li>
    <li>Fire detection and safety systems</li>
    <li>Lifts and accessible building entrances</li>
    <li>Power backup for specified common services</li>
    <li>Parking arrangements</li>
    <li>Internal pedestrian routes</li>
  </ul>

  <p>
    The final specifications can help buyers understand which facilities are provided, where they are located, and whether additional charges apply for certain services.
  </p>
</div>
      </div>
    </section>
  );
}