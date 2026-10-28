/* eslint-disable react/no-unescaped-entities */

import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";
import { ExtLink, IntLink } from "./SeoLinks";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Project Type",
    value: "Residential Township",
  },
  {
    icon: <FaRupeeSign className="text-3xl text-primary" />,
    label: "Starting Price",
    value: "₹ 1.1 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl text-primary" />,
    label: "Unit Type",
    value: "1, 2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl text-primary" />,
    label: "Unit Sizes",
    value: "721 to 2,600 sq.ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl text-primary" />,
    label: "Project Status",
    value: "New Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl text-primary" />,
    label: "Land Area",
    value: "50 Acres",
  },
  {
    icon: <FaCity className="text-3xl text-primary" />,
    label: "Total Units",
    value: "4,400+ Units",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Floor Structure",
    value: "3B + G + 42 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total Wings",
    value: "24 Wings",
  },
  {
    icon: <FaBuilding className="text-3xl text-primary" />,
    label: "Total Blocks",
    value: "12 Blocks",
  },
  {
    icon: <FaHelmetSafety className="text-3xl text-primary" />,
    label: "Builder",
    value: "Sobha Limited",
  },
  {
    icon: <FaCalendarDay className="text-3xl text-primary" />,
    label: "Possession",
    value: "Dec 2031",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
          <h2
          id="highlights-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Parkcity – Project Overview
        </h2>
        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    <a href="https://www.sobhaparkcity.com"><strong>Sobha Parkcity</strong></a> is a residential apartment project associated with <strong>Sobha Group</strong>, located on <strong>Hennur Main Road</strong> in North Bangalore. The project is planned to offer <strong>1, 2, 3 and 4 BHK</strong> apartments within a large residential development, with an emphasis on apartment layouts, shared facilities, and open spaces.
  </p>

  <p>
    The project covers approximately <strong>50 acres and is planned with 12 residential towers.</strong> With a reported total of more than <b>4,400 apartments</b>, the development is intended to accommodate a large residential community. The overall layout, tower arrangement, and availability of open areas are important factors to consider when evaluating the project.
  </p>

  <p>
    Sobha Parkcity offers planned <b>1, 2, 3 and 4 BHK apartments</b>, with reported super built-up areas ranging from <b>721 sq. ft. to 2,500 sq. ft.</b> The different configurations cater to varying space requirements, from smaller households to families seeking additional bedrooms and living areas. Actual carpet areas and final unit specifications should be confirmed through the approved floor plans.
  </p>

  <p>
    The project information also refers to approximately <b>80% open space</b> and a clubhouse of around <strong>50,000 sq. ft.</strong> These features may influence the distribution of recreational facilities and shared spaces within the development. However, the final master plan and approved specifications should be reviewed to understand how these areas are arranged.
  </p>

  <p>
    Located on <strong>Hennur Main Road, Sobha Parkcity is located in North Bangalore,</strong> where residential development and access to everyday services are relevant considerations for homebuyers. Before making a purchase decision, buyers should confirm the project's current launch status, applicable approvals, <strong>RERA registration,</strong> pricing, and possession schedule through official documentation.
  </p>
</div>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sobha Parkcity project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div aria-hidden="true" className="mt-1 flex-shrink-0">
                {item.icon}
              </div>

              <div>
                <p className="text-sm text-gray-500 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Sobha Parkcity Project Highlights</h2>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Project Detail</th>
          <th className="border border-gray-300 p-3 text-left">Information</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Project Name</td>
          <td className="border border-gray-300 p-3">Sobha Parkcity</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Developer</td>
          <td className="border border-gray-300 p-3">Sobha Group</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Location</td>
          <td className="border border-gray-300 p-3">Hennur Main Road, North Bangalore</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Property Type</td>
          <td className="border border-gray-300 p-3">Residential Apartments</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Land Area</td>
          <td className="border border-gray-300 p-3">Approximately 50 Acres</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Towers</td>
          <td className="border border-gray-300 p-3">12</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Wings</td>
          <td className="border border-gray-300 p-3">24</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Total Apartments</td>
          <td className="border border-gray-300 p-3">Approximately 4,400+</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Unit Types</td>
          <td className="border border-gray-300 p-3">1, 2, 3 and 4 BHK</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Super Built-up Area</td>
          <td className="border border-gray-300 p-3">721–2,500 Sq. Ft.</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Open Space</td>
          <td className="border border-gray-300 p-3">Approximately 80%, as stated on the website</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Clubhouse</td>
          <td className="border border-gray-300 p-3">Approximately 50,000 Sq. Ft., as stated on the website</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Starting Price</td>
          <td className="border border-gray-300 p-3">₹ 1.1 Cr. Onwards</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Project Status</td>
          <td className="border border-gray-300 p-3">Current status requires confirmation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Possession Date</td>
          <td className="border border-gray-300 p-3">July 2031, as stated on the referenced master-plan page; confirmation required</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold">Sobha Parkcity's Key Highlights and Planning Features</h2>

  <h3 className="text-xl font-bold">Prime Location on Hennur Main Road</h3>

  <p>
    Sobha Parkcity is located on <strong>Hennur Main Road in North Bangalore</strong>. The location is a key consideration for buyers assessing daily travel, access to essential services, and connectivity with other parts of the city.
  </p>

  <p>
    Homebuyers should evaluate the actual distance from the project to their workplace, schools, hospitals, and public transport facilities. Travel times can vary depending on traffic conditions and the route taken.
  </p>

  <h3 className="text-xl font-bold">Large Residential Development Across 50 Acres</h3>

  <p>
    The reported land area of approximately <b>50 acres</b> provides scope for arranging residential towers alongside internal roads, landscaped areas, and shared facilities. In a development of this size, the master plan plays an important role in determining how residents access common spaces and move around the property.
  </p>

  <p>
    Buyers should examine the approved master plan to understand the placement of towers, the distance between buildings, pedestrian routes, and the distribution of open areas. These details can help explain how the overall residential layout is organised.
  </p>

  <h3 className="text-xl font-bold">High-Rise Towers and Apartment Configurations</h3>

  <p>
    The project information lists <b>12 residential towers</b> with approximately <b>4,400 or more apartments</b>. The proposed <b>1, 2, 3 and 4 BHK</b> configurations offer different options based on household size and space requirements.
  </p>

  <p>
    The reported super built-up areas range from 721 sq. ft. for 1 BHK apartments to approximately 2,500 sq. ft. for 4 BHK apartments. When comparing these options, buyers should also consider carpet area, room dimensions, ventilation, natural light, and the placement of balconies.
  </p>

  <h3 className="text-xl font-bold">Open Spaces and Shared Facilities</h3>

  <p>
    The project website reportedly states that approximately 80% of the development is open space and identifies a clubhouse of around 50,000 sq. ft. These figures can help buyers begin evaluating the proposed balance between residential buildings and shared facilities.
  </p>

  <p>
    The final approved plans should be checked to clarify how open space is calculated and which areas are accessible to residents. Buyers should also confirm the clubhouse facilities, their availability, and any applicable maintenance charges before making a decision.
  </p>

  <h3 className="text-xl font-bold">Approximately 4,400+ Residential Apartments</h3>

  <p>
    <strong>Sobha Parkcity</strong> is described as a large residential development with approximately 4,400 or more apartments across 12 towers. The planned scale of the project makes the arrangement of residential buildings, internal circulation, and shared facilities important aspects of the overall layout.
  </p>

  <h3 className="text-xl font-bold">Multiple Apartment Configurations</h3>

  <p>
    The project information lists <b>1 BHK, 2 BHK, 3 BHK, and 4 BHK apartment</b> configurations to accommodate different space requirements. The reported super built-up areas range from 721 sq. ft. for 1 BHK homes to 2,500 sq. ft. for 4 BHK apartments. Buyers should compare carpet areas and room dimensions to understand the usable space available in each configuration.
  </p>

  <h3 className="text-xl font-bold">Modern Lifestyle Amenities</h3>

  <p>
    The project information refers to more than <b>40 amenities</b> and a clubhouse measuring approximately 50,000 sq. ft. These shared facilities are intended to support recreational, fitness, and community activities within the residential development. The final list of amenities and their specifications should be confirmed through the approved project documents.
  </p>

  <h3 className="text-xl font-bold">Green and Open Spaces</h3>

  <p>
    Sobha Parkcity's website states that approximately 80% of the project area is open space. The master plan will help buyers understand how landscaped areas, walking spaces, residential towers, and common facilities are distributed throughout the development. The approved layout should be checked to clarify the extent and accessibility of these open areas.
  </p>

  <h3 className="text-xl font-bold">High-Rise Residential Living</h3>

  <p>
    The development is planned with 12 residential towers across approximately 50 acres. In a project of this scale, tower positioning, building-to-building distances, lift access, and the orientation of individual apartments can influence everyday convenience. Buyers should review the floor plans and master plan to assess these aspects before selecting a unit.
  </p>

  <h3 className="text-xl font-bold">Location in North Bangalore</h3>

  <p>
    Located on Hennur Main Road, Sobha Parkcity is situated in North Bangalore. Buyers can evaluate the location based on their daily commuting routes, access to schools and healthcare facilities, and proximity to essential services. Actual travel times should be checked for the specific destinations they visit regularly.
  </p>

  <h3 className="text-xl font-bold">Apartment Layouts and Construction Details</h3>

  <p>
    The project website refers to Mivan construction technology and a floor plan efficiency figure of 73%. These details should be verified against the developer's official specifications. When reviewing an apartment, buyers should also assess room proportions, ventilation, natural light, storage space, and the relationship between carpet area and super built-up area.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">About the Project</h2>

  <p>
    <strong>Sobha Parkcity</strong> is described as a residential apartment development by Sobha Group on <strong>Hennur Main Road in North Bangalore</strong>. The project information indicates a planned development spread across approximately 50 acres, featuring 12 residential towers and more than 4,400 apartments.
  </p>

  <p>
    The proposed apartment configurations include 1 BHK, 2 BHK, 3 BHK, and 4 BHK homes. Their reported super built-up areas range from approximately 721 sq. ft. to 2,500 sq. ft., offering different layouts for households with varying space requirements. The final floor plans should be reviewed to understand the usable carpet area, room sizes, balcony arrangements, and circulation within each apartment.
  </p>

  <p>
    The project information also mentions a clubhouse of approximately 50,000 sq. ft. and a reported open-space allocation of around 80%. These figures provide an initial understanding of the proposed development, but buyers should consult the approved master plan to determine how recreational areas, landscaped spaces, and residential towers are arranged.
  </p>

  <p>
    The overall planning of a high-rise residential development involves more than the size of individual apartments. Tower orientation, internal roads, pedestrian movement, access to shared facilities, and the placement of open spaces can all influence daily living. Reviewing these elements can help buyers compare different configurations and understand the layout before making a decision.
  </p>

  <p>
    The key features described in the available project information include:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>12 planned residential towers</li>
    <li>Approximately 4,400+ apartments</li>
    <li>1 BHK, 2 BHK, 3 BHK, and 4 BHK configurations</li>
    <li>A reported clubhouse of approximately 50,000 sq. ft.</li>
    <li>Open spaces as stated on the project website</li>
    <li>Shared recreational and lifestyle facilities</li>
    <li>Apartment layouts with different super built-up areas</li>
  </ul>

  <p>
    The project information describes a pre-launch or expression-of-interest stage, but the current status requires confirmation. Buyers should verify the official RERA registration number, applicable approvals, final pricing, and possession schedule before paying any booking amount.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Customer Ratings and Reviews</h2>

  <p>
    Sobha Parkcity is a proposed residential apartment development by Sobha Group on Hennur Main Road in North Bangalore. The project information describes a development spread across approximately 50 acres, with 12 residential towers and more than 4,400 apartments. These details provide a starting point for evaluating the project's scale, apartment options, and planned community layout.
  </p>

  <p>
    When reviewing Sobha Parkcity, prospective buyers should consider factors such as the location, apartment configuration, usable floor area, tower arrangement, and proposed amenities. The project information lists 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments, allowing buyers to compare different layouts based on their household size and space requirements.
  </p>

  <p>
    The available project information also refers to approximately 80% open space and a clubhouse measuring around 50,000 sq. ft. Buyers should review the approved master plan and final amenity list to understand how these facilities are distributed and what they will include.
  </p>

  <p>
    As the project's current status and official documentation require confirmation, verified customer ratings and reviews should be assessed carefully. Prospective buyers can look for feedback from verified residents, if available, and evaluate the developer's documented commitments rather than relying solely on promotional descriptions or unverified online reviews.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">RERA Approval</h2>

  <p>
    The official RERA registration status of Sobha Parkcity needs to be verified before booking. The available project information does not establish a confirmed registration number, so buyers should check the <a href="https://rera.karnataka.gov.in/home" rel="nofollow noopener noreferrer"><b>Karnataka Real Estate Regulatory Authority's official</b></a> records for the project's registration details.
  </p>

  <p>
    RERA records can help buyers verify important information, including the registered project name, developer details, approved plans, declared completion date, and other applicable disclosures. The project information also mentions RERA and BBMP approvals, but these claims should be checked against the relevant official records.
  </p>

  <p>
    Before making a financial commitment, buyers should confirm the applicable approvals, review the sale agreement, and ensure that the advertised apartment configuration and possession schedule match the official documentation.
  </p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Expression of Interest (EOI) Charges for Sobha Parkcity</h2>

  <p>
    The available information describes Sobha Parkcity as being at a pre-launch or Expression of Interest (EOI) stage, although its current status requires confirmation. No verified EOI amount or official payment schedule has been provided for the project.
  </p>

  <p>
    An Expression of Interest generally indicates a prospective buyer's interest in a property before or during the formal booking process. However, the terms, payment amount, refund conditions, and any priority-allocation arrangements depend on the developer's official documentation.
  </p>

  <p>
    Before submitting an EOI for Sobha Parkcity, buyers should obtain written confirmation of the following:
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>
      <strong>EOI Amount:</strong> Confirm the amount applicable to the selected 2 BHK, 3 BHK, or 4 BHK apartment.
    </li>
    <li>
      <strong>Refund Policy:</strong> Check the conditions and timeline for returning the amount if the buyer decides not to proceed.
    </li>
    <li>
      <strong>Unit Allocation:</strong> Clarify whether an EOI provides a unit preference or guarantees any particular apartment.
    </li>
    <li>
      <strong>Payment Terms:</strong> Obtain the official payment schedule and details of any booking or agreement payments.
    </li>
    <li>
      <strong>Project Documentation:</strong> Verify the project's RERA registration and applicable approvals before making a payment.
    </li>
  </ul>

  <p>
    The final apartment prices, booking conditions, and construction-linked payment plan should be obtained directly from the developer or an authorised representative. Buyers should not rely on assumed EOI amounts or standard payment percentages without written confirmation specific to Sobha Parkcity.
  </p>
</div>
      </div>
    </section>
  );
}
