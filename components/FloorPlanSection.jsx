/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

import FloorPlanClient from "./FloorPlanClient";

const floorPlans = [
  {
    id: 1,
    label: "1 BHK Floor Plan",
    image: "./images/floorplans/1bhk.webp",
    alt: "Sobha Parkcity 1 BHK floor plan",
  },
  {
    id: 2,
    label: "2 BHK Floor Plan",
    image: "./images/floorplans/2bhk.webp",
    alt: "Sobha Parkcity 2 BHK floor plan",
  },
  {
    id: 3,
    label: "3 BHK Floor Plan",
    image: "./images/floorplans/3bhk.webp",
    alt: "Sobha Parkcity 3 BHK floor plan",
  },
  {
    id: 4,
    label: "4 BHK Floor Plan",
    image: "./images/floorplans/4bhk.webp",
    alt: "Sobha Parkcity 4 BHK floor plan",
  },
];

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Parkcity Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.sobhaparkcity.com/floor-plan"><strong>Sobha Parkcity floor plans</strong></a> are described as offering 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments with different space options for homebuyers. The reported super built-up areas range from 721 sq. ft. to 2,500 sq. ft., allowing buyers to compare layouts according to their household size and space requirements.
  </p>

  <p>
    When reviewing the floor plans, buyers should consider bedroom dimensions, living and dining areas, kitchen placement, bathroom access, balcony space, and natural ventilation. The final approved floor plans should be consulted to confirm the actual room layouts and usable carpet areas.
  </p>
</div>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          aria-label="Sobha Parkcity floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <FloorPlanClient plan={plan} />
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-6 text-gray-800 mt-6">
  <h3 className="text-xl font-bold">1 BHK Apartments</h3>

  <p>
    The 1 BHK apartment is reported to have a super built-up area of 721 sq. ft. This configuration may be considered by individuals or smaller households seeking a more compact home. The carpet area and detailed room layout have not been provided in the available project information, so buyers should confirm these details against the approved floor plan.
  </p>

  <h3 className="text-xl font-bold">2 BHK Apartments</h3>

  <p>
    The 2 BHK apartments, measuring approximately 1,200 sq. ft. in super built-up area, may suit smaller families, couples, or buyers looking for a two-bedroom home. The final layout should be assessed for the practical use of available space.
  </p>

  <p>Key features to review include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Living and dining area arrangement</li>
    <li>Two bedrooms and their dimensions</li>
    <li>Kitchen layout and storage options</li>
    <li>Bathroom placement and accessibility</li>
    <li>Balcony space and ventilation</li>
  </ul>

  <p>
    The relationship between the living area, kitchen, and bedrooms can influence everyday convenience. Buyers should check the carpet area to understand how much usable indoor space is available.
  </p>

  <h3 className="text-xl font-bold">3 BHK Apartments</h3>

  <p>
    The 3 BHK apartments, with reported super built-up areas of 1,600–1,900 sq. ft., provide an additional bedroom compared with the 2 BHK configuration. This layout may be suitable for families needing extra space for children, guests, or a home office.
  </p>

  <p>Important floor plan elements include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Living and dining areas with suitable circulation space</li>
    <li>Three bedrooms with practical room dimensions</li>
    <li>Kitchen and utility area arrangement, where provided</li>
    <li>Bathroom locations and access</li>
    <li>Balconies and sources of natural light</li>
  </ul>

  <p>
    The available space may differ between individual 3 BHK layouts. Buyers should compare the detailed plans to understand bedroom sizes, storage options, and the separation between private and shared living areas.
  </p>

  <h3 className="text-xl font-bold">4 BHK Apartments</h3>

  <p>
    The 4 BHK apartments, with a reported super built-up area of approximately 2,500 sq. ft., offer a larger configuration for households requiring additional bedrooms and living space.
  </p>

  <p>Key features to examine include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Four-bedroom layout and room dimensions</li>
    <li>Living and dining area proportions</li>
    <li>Kitchen and utility arrangements</li>
    <li>Bathroom access and privacy</li>
    <li>Balcony placement and ventilation</li>
  </ul>

  <p>
    For this configuration, the distribution of space is as important as the overall area. Reviewing the approved floor plan can help buyers determine whether the layout supports their furniture requirements, storage needs, and everyday activities.
  </p>
</div>
      </div>
    </section>
  );
}