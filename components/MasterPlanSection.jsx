/* eslint-disable react/no-unescaped-entities */
import { ExtLink, IntLink } from "./SeoLinks";

import MasterPlanClient from "./MasterPlanClient";

export default function MasterPlanSection() {
  return (
    <section
      id="master-plan"
      aria-labelledby="master-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="master-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Sobha Parkcity Master Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    The <a href="https://www.sobhaparkcity.com/master-plan"><strong>Sobha Parkcity master plan</strong></a> is described as covering approximately <b>50 acres</b> on Hennur Main Road in North Bangalore. The project information lists <b>12 residential towers</b> and approximately <b>4,400 or more apartments</b>.
  </p>

  <p>
    A development of this scale requires careful planning of tower locations, internal circulation, shared facilities, and open spaces. The approved master plan is the best reference for understanding how residential buildings and common areas are positioned within the site.
  </p>
</div>
        <div className="max-w-2xl mx-auto">
          <div
          
            className="relative w-full aspect-[5/3] bg-gray-100 overflow-hidden"
          >
            <img
              src="./images/master-plan.webp"
              alt="Sobha Parkcity master plan"
              className="w-full h-full object-cover"
              loading="lazy"
            />

            <MasterPlanClient/>
          </div>

          <div className="bg-primary text-white text-center font-semibold text-lg md:text-xl py-4 px-4">
            Master Plan
          </div>
        </div>
        <div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Below Are the Key Master Plan Specifications of Sobha Parkcity</h2>

  <h3 className="text-xl font-bold">Total Land Area</h3>

  <p>
    Sobha Parkcity is reported to cover approximately 50 acres. The overall site area provides the framework for arranging residential towers, internal roads, shared facilities, and landscaped spaces.
  </p>

  <p>
    The approved site plan should be reviewed to understand the distribution of these areas and identify the spaces designated for common use.
  </p>

  <h3 className="text-xl font-bold">Structure</h3>

  <p>
    The project is described as a high-rise residential development. The available information identifies 12 towers, but the exact floor count and final building specifications should be confirmed through the approved plans.
  </p>

  <p>
    Tower height, lift arrangements, and building access are relevant considerations when comparing apartments in a large residential complex.
  </p>

  <h3 className="text-xl font-bold">Number of Towers</h3>

  <p>
    The project information lists 12 residential towers. Their placement within the development can influence apartment orientation, views, daylight, and the distance between neighbouring buildings.
  </p>

  <p>
    Buyers should examine the master plan to understand tower spacing and the location of their preferred apartment relative to common facilities and internal roads.
  </p>

  <h3 className="text-xl font-bold">Total Number of Apartments</h3>

  <p>
    Sobha Parkcity is reported to include approximately 4,400+ apartments. The number of homes makes the planning of entry points, lifts, parking, and internal movement important aspects of the development.
  </p>

  <p>
    The final project documents should clarify the confirmed unit count and the distribution of apartments across the towers.
  </p>

  <h3 className="text-xl font-bold">Apartment Configurations</h3>

  <p>
    The project information lists 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments, with reported super built-up areas ranging from 721 sq. ft. to 2,500 sq. ft.
  </p>

  <p>
    These configurations offer different space options. Buyers should compare the approved floor plans and carpet areas to determine which layout best matches their household's requirements.
  </p>

  <h3 className="text-xl font-bold">Open Spaces and Landscaping</h3>

  <p>
    The project website reportedly states that approximately 80% of the development is open space. This figure should be verified against the approved master plan to understand how open space is calculated and which areas are accessible to residents.
  </p>

  <p>
    The layout can help buyers identify landscaped areas, walking spaces, and the relationship between open areas and residential towers.
  </p>

  <h3 className="text-xl font-bold">Clubhouse and Amenities Zone</h3>

  <p>
    The available project information refers to a clubhouse of approximately 50,000 sq. ft. and more than 40 planned or claimed amenities. The final amenity schedule should be checked to confirm the facilities, their locations, and the arrangements for resident access.
  </p>

  <p>
    The master plan can also help buyers understand the distance between residential towers and shared recreational facilities.
  </p>

  <h3 className="text-xl font-bold">Internal Infrastructure</h3>

  <p>
    Internal roads, pedestrian routes, parking areas, and building entrances influence how residents move around a large residential development. Their placement can affect access to apartment towers and shared facilities.
  </p>

  <p>
    Buyers should review the approved layout for details about vehicle movement, pedestrian access, parking provisions, and the location of service areas.
  </p>

  <h3 className="text-xl font-bold">Security and Access</h3>

  <p>
    The layout of entrance gates, visitor access points, and internal circulation routes can affect how residents and visitors enter and move through the property. However, the specific security arrangements for Sobha Parkcity should be confirmed with the developer.
  </p>

  <p>
    Before booking, buyers should also verify the project's current status, RERA registration, and applicable approvals through official records.
  </p>

  <p>
    Overall, the Sobha Parkcity master plan and floor plans should be evaluated together. The master plan explains the arrangement of towers and shared spaces, while the apartment floor plans show how individual homes are organised. Reviewing both can help buyers make a more informed comparison of the available configurations.
  </p>
</div>
      </div>
    </section>
  );
}