/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";
import { amenitiesData } from "@/components/AmenitiesSection";

function AmenitiesPage() {

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Amenities"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Park City Amenities
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p><strong>Sobha Park City Amenities</strong> are planned to support recreation, fitness, relaxation and community living within a large residential township on Hennur Main Road, North Bangalore. Developed by <strong>Sobha Limited</strong>, the proposed 50-acre project features more than 4,000 apartments across 12 residential towers, with a range of shared facilities for residents of different age groups.</p>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/amenities.webp"
              alt="Sobha Park City Amenities"
              loading="lazy"
              title="Amenities at Sobha Park City, Hennur Main Road, North Bangalore"
            />
  <p>The development includes a grand clubhouse spanning more than 25,000 sq.ft., swimming pools, a gymnasium, sports courts, a luxury spa, landscaped gardens and dedicated spaces for children and senior citizens. Other facilities include a mini theatre, library, banquet hall, co-working areas, a retail plaza and outdoor recreational spaces.</p>

  <p>Approximately 80% of the township is planned as open space, with more than 1,000 native trees forming part of its landscape plan. The overall amenity arrangement is intended to bring fitness, leisure, social activities and everyday convenience together within the residential community.</p>

  <p>The following guide explores the facilities by category, explaining what residents can expect from the proposed clubhouse, sports infrastructure, wellness areas, outdoor spaces and essential services.</p>
  <ul
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4"
          aria-label="Sobha Park City amenities"
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
  <h2 className="text-2xl font-bold">A Closer Look at the Amenity Plan</h2>

  <p>The proposed amenity collection at <a href="https://www.sobhaparkcity.com/"><strong>Sobha Park City</strong></a> covers several aspects of residential life. Instead of limiting recreation to a clubhouse, the township plan includes indoor and outdoor facilities for exercise, entertainment, social interaction and relaxation.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Project feature</th>
          <th className="border border-gray-300 p-3 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Project name</td><td className="border border-gray-300 p-3">Sobha Park City</td></tr>
        <tr><td className="border border-gray-300 p-3">Developer</td><td className="border border-gray-300 p-3">Sobha Limited</td></tr>
        <tr><td className="border border-gray-300 p-3">Location</td><td className="border border-gray-300 p-3">Hennur Main Road, North Bangalore</td></tr>
        <tr><td className="border border-gray-300 p-3">Total land area</td><td className="border border-gray-300 p-3">50 acres</td></tr>
        <tr><td className="border border-gray-300 p-3">Residential development</td><td className="border border-gray-300 p-3">4,000+ apartments</td></tr>
        <tr><td className="border border-gray-300 p-3">Residential towers</td><td className="border border-gray-300 p-3">12</td></tr>
        <tr><td className="border border-gray-300 p-3">Clubhouse area</td><td className="border border-gray-300 p-3">25,000+ sq.ft.</td></tr>
        <tr><td className="border border-gray-300 p-3">Planned open space</td><td className="border border-gray-300 p-3">Approximately 80%</td></tr>
        <tr><td className="border border-gray-300 p-3">Native trees</td><td className="border border-gray-300 p-3">1,000+</td></tr>
        <tr><td className="border border-gray-300 p-3">Apartment configurations</td><td className="border border-gray-300 p-3">1, 2, 3 and 4 BHK</td></tr>
        <tr><td className="border border-gray-300 p-3">Pre-launch</td><td className="border border-gray-300 p-3">November 2026</td></tr>
        <tr><td className="border border-gray-300 p-3">Planned launch</td><td className="border border-gray-300 p-3">December 2026</td></tr>
        <tr><td className="border border-gray-300 p-3">Planned completion</td><td className="border border-gray-300 p-3">November 2031</td></tr>
        <tr><td className="border border-gray-300 p-3">Expected possession</td><td className="border border-gray-300 p-3">December 2031</td></tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold">The Clubhouse: Indoor Recreation and Community Living</h2>

  <p>The clubhouse is one of the central shared facilities planned for Sobha Park City. With an area of more than 25,000 sq.ft., it is designed to accommodate recreational activities, social gatherings, celebrations and work-related requirements.</p>

  <p>Residents can use the indoor spaces for different activities without having to travel outside the township.</p>

  <h3 className="text-xl font-bold">Facilities Planned Inside the Clubhouse</h3>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Multipurpose hall:</strong> A flexible indoor venue for community activities, meetings and group events.</li>
    <li><strong>Banquet hall:</strong> A dedicated setting for family celebrations, functions and social occasions.</li>
    <li><strong>Mini theatre:</strong> An indoor entertainment facility for watching films and spending time with family and friends.</li>
    <li><strong>Library:</strong> A quieter environment for reading, studying and personal work.</li>
    <li><strong>Co-working space:</strong> Shared work areas for residents who need an alternative to working from their apartments.</li>
    <li><strong>Recreational spaces:</strong> Indoor areas intended for leisure and interaction among residents.</li>
    <li><strong>Retail plaza:</strong> A planned shopping area that adds convenience within the residential development.</li>
  </ul>

  <p>The clubhouse is complemented by outdoor workstations and an amphitheatre, extending its role beyond indoor recreation.</p>

  <h2 className="text-2xl font-bold">Sports Infrastructure for Active Residents</h2>

  <p>The sports facilities at Sobha Park City are planned to accommodate a variety of interests, from individual exercise to organised games and friendly competitions. The proposed collection includes dedicated courts, practice areas and indoor recreation facilities.</p>

  <h3 className="text-xl font-bold">Outdoor Sports and Games</h3>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Tennis courts:</strong> Spaces for singles and doubles games.</li>
    <li><strong>Badminton court:</strong> A facility for recreational and regular badminton sessions.</li>
    <li><strong>Squash court:</strong> An indoor sports option for residents interested in racquet games.</li>
    <li><strong>Futsal court:</strong> A dedicated area for small-sided football matches.</li>
    <li><strong>Cricket nets:</strong> Practice facilities for batting and bowling.</li>
    <li><strong>Skating rink:</strong> A recreational area for skating activities.</li>
    <li><strong>Outdoor sports courts:</strong> Additional outdoor facilities for games and physical activities.</li>
  </ul>

  <h3 className="text-xl font-bold">Indoor Games and Recreation</h3>

  <p>The proposed indoor gaming facilities include a bowling alley, indoor games and a billiards or pool table. These options provide alternatives to outdoor sports, particularly for residents looking for casual recreation or activities with friends and family.</p>

  <h2 className="text-2xl font-bold">Fitness Facilities and Daily Exercise</h2>

  <p>Residents who prefer regular exercise can make use of the planned gymnasium and jogging track. These facilities are intended to support individual fitness routines within the residential premises.</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Gymnasium:</strong> A dedicated indoor fitness area for workouts and strength training.</li>
    <li><strong>Jogging track:</strong> A designated route for running, walking and daily exercise.</li>
    <li><strong>Outdoor activity areas:</strong> Spaces that complement the township's sports and recreational facilities.</li>
  </ul>

  <p>Having these facilities within the development can make it easier for residents to include physical activity in their daily schedules.</p>

  <h2 className="text-2xl font-bold">Swimming, Spa and Wellness Facilities</h2>

  <p>The wellness amenities focus on exercise, relaxation and activities that support a balanced lifestyle. The proposed facilities include both water-based recreation and dedicated spaces for quiet practices.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Wellness facility</th>
          <th className="border border-gray-300 p-3 text-left">Intended use</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Swimming pool</td><td className="border border-gray-300 p-3">Swimming, exercise and recreational use</td></tr>
        <tr><td className="border border-gray-300 p-3">Indoor heated pool</td><td className="border border-gray-300 p-3">Indoor swimming across different seasons</td></tr>
        <tr><td className="border border-gray-300 p-3">Luxury spa</td><td className="border border-gray-300 p-3">Relaxation and personal wellness</td></tr>
        <tr><td className="border border-gray-300 p-3">Yoga pavilion / deck</td><td className="border border-gray-300 p-3">Yoga and group wellness sessions</td></tr>
        <tr><td className="border border-gray-300 p-3">Meditation area</td><td className="border border-gray-300 p-3">Quiet time and meditation</td></tr>
      </tbody>
    </table>
  </div>

  <p>The combination of swimming facilities, spa amenities and dedicated yoga and meditation areas provides residents with different ways to spend their leisure time.</p>

  <h2 className="text-2xl font-bold">Landscaped Open Spaces and Green Areas</h2>

  <p>A significant part of the Sobha Park City master plan is allocated to open areas and landscaping. Approximately 80% of the township is planned as open space, with more than 1,000 native trees included in the proposed planting plan.</p>

  <p>These landscaped areas are intended to create outdoor spaces between the residential buildings and provide places for walking, sitting and spending time outdoors.</p>

  <h3 className="text-xl font-bold">Outdoor Features</h3>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Landscaped gardens:</strong> Green areas for relaxation, walking and informal gatherings.</li>
    <li><strong>Party lawn:</strong> An open venue for community events and celebrations.</li>
    <li><strong>Outdoor party terrace:</strong> A dedicated space for evening gatherings and social activities.</li>
    <li><strong>Amphitheatre:</strong> An outdoor venue for performances and community programmes.</li>
    <li><strong>Pet park:</strong> A designated area where residents can spend time with their pets.</li>
    <li><strong>Native tree planting:</strong> More than 1,000 native trees are planned across the township.</li>
    <li><strong>Open-space allocation:</strong> Approximately 80% of the overall development is planned as open space.</li>
  </ul>

  <p>The landscaping and outdoor facilities are intended to complement the residential towers and clubhouse, providing options for residents who prefer spending time outside their apartments.</p>

  <h2 className="text-2xl font-bold">Family-Friendly Facilities for Children and Parents</h2>

  <p>The proposed amenities include dedicated spaces for younger residents and families. These facilities are intended to provide children with recreational areas within the residential community while offering parents an additional childcare-related facility.</p>

  <h3 className="text-xl font-bold">Children's Play Area</h3>

  <p>A dedicated children's play area is planned for outdoor recreation. It provides a designated setting where younger residents can spend time playing and interacting with other children.</p>

  <h3 className="text-xl font-bold">Crèche</h3>

  <p>The proposed crèche is intended to provide a childcare facility within the township. It may be particularly useful for households with young children and working parents.</p>

  <h3 className="text-xl font-bold">Pet Park</h3>

  <p>The pet park provides a dedicated outdoor area for residents who own pets. It forms part of the wider outdoor and lifestyle amenity collection.</p>

  <h2 className="text-2xl font-bold">Spaces for Senior Citizens</h2>

  <p>The township also includes a designated senior citizens' zone. This space is planned as a place where older residents can sit, relax and interact with other members of the community.</p>

  <p>Other amenities that may be relevant to senior residents include the jogging track, landscaped gardens, yoga pavilion and meditation area. These shared spaces offer alternatives for light outdoor activity and quieter leisure time.</p>

  <h2 className="text-2xl font-bold">Everyday Convenience and Essential Services</h2>

  <p>Along with recreational facilities, Sobha Park City includes proposed services and infrastructure intended to support the day-to-day functioning of the residential community.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Facility</th>
          <th className="border border-gray-300 p-3 text-left">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">24/7 security</td><td className="border border-gray-300 p-3">Round-the-clock security arrangements</td></tr>
        <tr><td className="border border-gray-300 p-3">Power backup</td><td className="border border-gray-300 p-3">Backup power for common requirements</td></tr>
        <tr><td className="border border-gray-300 p-3">EV charging</td><td className="border border-gray-300 p-3">Charging provisions for electric vehicles</td></tr>
        <tr><td className="border border-gray-300 p-3">Rainwater harvesting</td><td className="border border-gray-300 p-3">Collection and management of rainwater</td></tr>
        <tr><td className="border border-gray-300 p-3">Waste management</td><td className="border border-gray-300 p-3">On-site waste handling arrangements</td></tr>
        <tr><td className="border border-gray-300 p-3">Organic waste converters</td><td className="border border-gray-300 p-3">Processing of organic waste within the development</td></tr>
      </tbody>
    </table>
  </div>

  <p>These facilities address essential residential requirements alongside the recreational and lifestyle features.</p>

  <h2 className="text-2xl font-bold">How the Amenities Cater to Different Age Groups</h2>

  <p>The amenity plan includes facilities for different household members rather than focusing on a single type of recreation. Residents can select activities based on their interests, age and daily routines.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Resident group</th>
          <th className="border border-gray-300 p-3 text-left">Relevant facilities</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Young children</td><td className="border border-gray-300 p-3">Children's play area and crèche</td></tr>
        <tr><td className="border border-gray-300 p-3">Teenagers</td><td className="border border-gray-300 p-3">Skating rink, futsal court, cricket nets, badminton, squash and bowling alley</td></tr>
        <tr><td className="border border-gray-300 p-3">Working adults</td><td className="border border-gray-300 p-3">Gymnasium, tennis courts, swimming pool, spa and co-working space</td></tr>
        <tr><td className="border border-gray-300 p-3">Senior citizens</td><td className="border border-gray-300 p-3">Senior citizens' zone, jogging track, yoga pavilion, meditation area and gardens</td></tr>
        <tr><td className="border border-gray-300 p-3">Families</td><td className="border border-gray-300 p-3">Mini theatre, banquet hall, party lawn and pet park</td></tr>
      </tbody>
    </table>
  </div>

  <p>The shared facilities also provide opportunities for residents to interact through sports, celebrations, group activities and everyday recreation.</p>

  <h2 className="text-2xl font-bold">What to Check Before Choosing a Home Based on Amenities</h2>

  <p>A large amenity list can be useful, but buyers should consider how the facilities fit their actual requirements. The following points can help when evaluating the proposed amenities at Sobha Park City.</p>

  <ol className="list-decimal space-y-2 pl-6">
    <li><strong>Identify the facilities you will use regularly:</strong> Consider whether the gym, swimming pool, jogging track or sports courts match your lifestyle.</li>
    <li><strong>Consider the needs of every household member:</strong> Families may prioritise children's facilities, while older residents may prefer accessible gardens and quieter spaces.</li>
    <li><strong>Review indoor and outdoor options:</strong> A combination of both gives residents alternatives for different activities and weather conditions.</li>
    <li><strong>Understand the clubhouse facilities:</strong> Check which spaces are planned for recreation, celebrations, reading and work.</li>
    <li><strong>Confirm operational details:</strong> Ask about facility availability, access rules, operating hours, maintenance arrangements and any applicable usage charges.</li>
    <li><strong>Check the development schedule:</strong> The project information states planned completion in November 2031 and expected possession in December 2031. Buyers should confirm the expected readiness of individual amenities with the developer.</li>
  </ol>

  <p>For the latest amenity specifications and availability, prospective buyers can contact the project team before making a decision.</p>

  <h2 className="text-2xl font-bold">Sobha Park City Amenities – Complete Facilities List</h2>

  <p>The following table provides a consolidated view of the proposed amenities across the different categories.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Category</th>
          <th className="border border-gray-300 p-3 text-left">Planned facilities</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Sports and fitness</td><td className="border border-gray-300 p-3">Gymnasium, jogging track, badminton court, squash court, futsal court, tennis courts, cricket nets, bowling alley, skating rink, outdoor sports courts, indoor games and billiards / pool table</td></tr>
        <tr><td className="border border-gray-300 p-3">Swimming and wellness</td><td className="border border-gray-300 p-3">Swimming pool, indoor heated pool, luxury spa, yoga pavilion / deck and meditation area</td></tr>
        <tr><td className="border border-gray-300 p-3">Clubhouse and indoor recreation</td><td className="border border-gray-300 p-3">25,000+ sq.ft. clubhouse, multipurpose hall, banquet hall, mini theatre, library, co-working space, recreational spaces and retail plaza</td></tr>
        <tr><td className="border border-gray-300 p-3">Community and outdoor events</td><td className="border border-gray-300 p-3">Amphitheatre, outdoor workstations, party lawn and outdoor party terrace</td></tr>
        <tr><td className="border border-gray-300 p-3">Landscape and open areas</td><td className="border border-gray-300 p-3">Landscaped gardens, approximately 80% open space and 1,000+ native trees</td></tr>
        <tr><td className="border border-gray-300 p-3">Family and lifestyle</td><td className="border border-gray-300 p-3">Children's play area, crèche and pet park</td></tr>
        <tr><td className="border border-gray-300 p-3">Senior citizen facilities</td><td className="border border-gray-300 p-3">Dedicated senior citizens' zone</td></tr>
        <tr><td className="border border-gray-300 p-3">Security and infrastructure</td><td className="border border-gray-300 p-3">24/7 security, power backup and EV charging</td></tr>
        <tr><td className="border border-gray-300 p-3">Sustainability</td><td className="border border-gray-300 p-3">Rainwater harvesting, waste management and organic waste converters</td></tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold">Sobha Park City Amenities – Project Timeline and Status</h2>

  <p>Sobha Park City is being presented as a proposed residential township on Hennur Main Road, North Bangalore. The pre-launch opened in November 2026, with the main launch planned for December 2026. The supplied project schedule indicates completion in November 2031 and possession in December 2031.</p>

  <p>The amenities described on this page are part of the proposed development. Buyers should check the latest approved plans, specifications and project updates to confirm the final facilities and their delivery schedule. Karnataka RERA registration is awaited, according to the supplied project information.</p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions About Sobha Park City Amenities</h2>

  <h3 className="text-xl font-bold">1. What are the main amenities at Sobha Park City?</h3>
  <p>The proposed amenities include a 25,000+ sq.ft. clubhouse, swimming pool, indoor heated pool, gymnasium, luxury spa, tennis courts, jogging track, landscaped gardens, children's play area and dedicated community spaces.</p>

  <h3 className="text-xl font-bold">2. What facilities are planned inside the clubhouse?</h3>
  <p>The clubhouse is planned to include a multipurpose hall, banquet hall, mini theatre, library, co-working space, recreational areas and a retail plaza. The development also includes outdoor workstations and an amphitheatre.</p>

  <h3 className="text-xl font-bold">3. Which sports facilities are available at Sobha Park City?</h3>
  <p>The planned sports facilities include badminton, squash, futsal and tennis courts, cricket nets, a bowling alley, skating rink, outdoor sports courts, indoor games and a billiards or pool table.</p>

  <h3 className="text-xl font-bold">4. Does Sobha Park City have a swimming pool?</h3>
  <p>Yes. The proposed wellness facilities include a swimming pool and an indoor heated pool, along with a luxury spa, yoga pavilion and meditation area.</p>

  <h3 className="text-xl font-bold">5. How large is the clubhouse at Sobha Park City?</h3>
  <p>The proposed grand clubhouse covers more than 25,000 sq.ft. and is planned to accommodate indoor recreation, social gatherings, celebrations, reading and co-working activities.</p>

  <h3 className="text-xl font-bold">6. How much open space is planned at Sobha Park City?</h3>
  <p>Approximately 80% of the 50-acre township is planned as open space. The landscape plan also includes more than 1,000 native trees, landscaped gardens, a party lawn and an outdoor party terrace.</p>

  <h3 className="text-xl font-bold">7. Are there amenities for children and senior citizens?</h3>
  <p>Yes. The proposed facilities include a children's play area and crèche for younger residents, along with a dedicated senior citizens' zone for older members of the community.</p>

  <h3 className="text-xl font-bold">8. Does the project include facilities for pets?</h3>
  <p>Yes. A pet park is included in the proposed outdoor and lifestyle amenities.</p>

  <h3 className="text-xl font-bold">9. What security and sustainability facilities are planned?</h3>
  <p>The proposed services include 24/7 security, power backup, EV charging provisions, rainwater harvesting, waste management and organic waste converters.</p>

  <h3 className="text-xl font-bold">10. Are the Sobha Park City amenities ready for use?</h3>
  <p>No. The facilities form part of a proposed residential development. The pre-launch opened in November 2026, the launch is planned for December 2026, completion is planned for November 2031 and possession is expected in December 2031, based on the supplied project schedule. Buyers should confirm the latest development status with the project team.</p>
</div>
        </div>
      </main>
    </>
  );
}

export default AmenitiesPage;
