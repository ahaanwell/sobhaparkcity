/* eslint-disable react/no-unescaped-entities */
import { IntLink, ExtLink } from "./SeoLinks";
import Link from "next/link";


const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2321051781355!2d77.6299432!3d13.0208861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171e2f9917d3%3A0xa89ad8fa1447f15a!2sHennur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1793038070353!5m2!1sen!2sin";

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="w-full bg-white py-14 px-3 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="location-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Location and Connectivity
        </h2>

        <div className="w-full h-px bg-gray-200 mb-6" />
        <div className="space-y-6 text-gray-800 mb-6">
  <p>
    Sobha Park City is described as a residential apartment development on Hennur Main Road in North Bangalore. Its location is an important consideration for homebuyers assessing daily commutes, access to essential services, and travel to employment centres across the city.
  </p>

  <p>
    Hennur Main Road connects residential neighbourhoods in North Bangalore with other parts of Bengaluru. The convenience of living in this area depends on the specific route, traffic conditions, and access to major roads from the project entrance.
  </p>

  <p>
    The surrounding area can be evaluated for access to schools, healthcare facilities, shopping centres, and public transportation. Buyers working in different parts of Bengaluru should check their regular commuting routes before choosing an apartment at Sobha Park City.
  </p>

  <p>
    For a practical location assessment, it is important to distinguish between the project's stated address and the actual travel distance to nearby destinations. Distances and journey times should be verified using the confirmed project entrance and current road conditions.
  </p>
</div>
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="w-full h-95 md:h-115">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Hennur Main Road, North Bangalore"
              aria-label="Google Maps showing Hennur Main Road in Bangalore; this is not a verified Sobha Park City site pin"
            />
          </div>

          <Link
            href="/location"
            aria-label="Know more about Sobha Park City location on Hennur Main Road, Bangalore"
            className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
          >
            Know More About Location
          </Link>
        </div>
        <div className="space-y-6 text-gray-800 mb-6">
  <h2 className="text-2xl font-bold">Location Advantages of Sobha Park City</h2>

  <p>
    <a href="https://www.sobhaparkcity.com/location"><strong>Sobha Park City's location</strong></a> on <b>Hennur Main Road</b> offers access to several parts of North Bangalore. When evaluating the location, buyers should consider road connectivity, nearby employment centres, educational institutions, healthcare facilities, and shopping destinations.
  </p>

  <p>Key location factors to assess include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Access to Hennur Main Road and connecting arterial roads.</li>
    <li>Road connectivity towards Hebbal and the Outer Ring Road.</li>
    <li>Access to employment centres such as Manyata Tech Park.</li>
    <li>Schools and healthcare facilities in the wider Hennur area.</li>
    <li>Shopping centres and everyday services within driving distance.</li>
    <li>Public transport options and potential future metro connectivity.</li>
  </ul>

  <p>
    The actual convenience of these connections will depend on the confirmed project entrance, route selection, and traffic conditions.
  </p>

  <h3 className="text-xl font-bold">Connectivity Snapshot</h3>

  <p>
    The following destinations are relevant to a location assessment of the Hennur area. Distances are indicative and should be checked from the exact Sobha Park City site before publishing them as confirmed project distances.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Key Location</th>
          <th className="border border-gray-300 p-3 text-left">Connectivity Relevance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Hennur Main Road</td>
          <td className="border border-gray-300 p-3">Primary road corridor</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Outer Ring Road</td>
          <td className="border border-gray-300 p-3">Access to major employment corridors</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Hebbal</td>
          <td className="border border-gray-300 p-3">Regional road connections and business areas</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Manyata Tech Park</td>
          <td className="border border-gray-300 p-3">Major employment destination</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Kirloskar Business Park</td>
          <td className="border border-gray-300 p-3">Employment and commercial hub</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Kempegowda International Airport</td>
          <td className="border border-gray-300 p-3">Airport access via North Bangalore road corridors</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Nearby schools</td>
          <td className="border border-gray-300 p-3">Education and family convenience</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Nearby hospitals</td>
          <td className="border border-gray-300 p-3">Healthcare access</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Shopping centres in North Bangalore</td>
          <td className="border border-gray-300 p-3">Retail, dining, and daily needs</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Upcoming metro connections</td>
          <td className="border border-gray-300 p-3">Potential future public transport option</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    The distances and travel times for these destinations should be verified using the project's confirmed location and current route conditions. Any future metro connectivity should also be described as planned or upcoming until the relevant service is operational.
  </p>

  <p>
    Located in North Bangalore, Sobha Park City can be assessed in terms of its access to employment areas, essential services, and major road networks. For homebuyers, the most useful approach is to test regular commute routes, check nearby facilities, and confirm the project's exact location before making a purchase decision.
  </p>

  <h2 className="text-2xl font-bold">Sobha Park City Airport Connectivity</h2>

  <p>
    For residents of <b>Sobha Park City on Hennur Main Road</b>, access to Kempegowda International Airport is an important factor when considering the project's location. The journey depends on the chosen route, traffic levels, and the precise entry point of the development.
  </p>

  <p>
    Homebuyers who travel frequently should compare available driving routes and check estimated journey times at different hours of the day. This can help them understand how practical airport travel would be for their regular needs.
  </p>

  <h2 className="text-2xl font-bold">Metro Connectivity</h2>

  <p>
    Access to Namma Metro is another consideration for people evaluating Sobha Park City. Buyers can check the operational metro stations serving North Bangalore and determine how easily they can reach them from Hennur Main Road.
  </p>

  <p>
    The nearest convenient station will depend on the project's exact location and the availability of connecting transport. Current routes and station operations should be verified, and proposed metro extensions should not be treated as operational services.
  </p>

  <h2 className="text-2xl font-bold">Bus and Public Transport</h2>

  <p>
    Public transport can provide an alternative to travelling by private car. Prospective residents should investigate BMTC services along Hennur Main Road, including nearby stops, route coverage, and bus frequency.
  </p>

  <p>
    Auto-rickshaws and app-based taxis may offer additional options for local journeys, subject to availability. Checking the distance from the project entrance to public transport stops can help buyers understand how convenient these services would be for everyday commuting.
  </p>

  <h2 className="text-2xl font-bold">Road Connectivity</h2>

  <p>
    Sobha Park City's stated location on Hennur Main Road makes road access a relevant part of evaluating the development. Buyers should consider the routes connecting the area with employment centres, the airport, and other residential neighbourhoods.
  </p>

  <p>Important connections and destinations to examine include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Hennur Main Road: The main road associated with the project's location.</li>
    <li>Outer Ring Road: Provides connections towards various residential and commercial areas.</li>
    <li>Hebbal: A major junction linking several routes across North Bangalore.</li>
    <li>Manyata Tech Park: An important employment centre in the region.</li>
    <li>Kempegowda International Airport: A key destination for domestic and international travel.</li>
    <li>Nearby residential areas: Provide access to everyday shopping, education, healthcare, and other services.</li>
  </ul>

  <p>
    Travel times and distances can vary with traffic and route selection. Buyers should check current navigation information from the confirmed project entrance before relying on estimated journey times.
  </p>
</div>
<div className="space-y-6 text-gray-800 mb-6">
  <h2 className="text-2xl font-bold">Comparing Hennur and Hebbal for Homebuyers</h2>

  <p>
    Hennur and Hebbal are two North Bangalore locations that offer different considerations for residential buyers. Hennur provides access to residential areas along Hennur Main Road, while Hebbal serves as a major road junction connecting the airport corridor with other parts of the city.
  </p>

  <p>
    The choice between these locations depends on individual requirements, including workplace proximity, apartment size, property costs, and access to daily necessities. Prices also vary according to the particular project, its specifications, and the property being considered.
  </p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Location</th>
          <th className="border border-gray-300 p-3 text-left">Main Comparison Factors</th>
          <th className="border border-gray-300 p-3 text-left">What Buyers Should Assess</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-3">Hennur</td>
          <td className="border border-gray-300 p-3">Residential choices and local road access</td>
          <td className="border border-gray-300 p-3">Connectivity through Hennur Main Road and nearby facilities</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">Hebbal</td>
          <td className="border border-gray-300 p-3">Major road connections and employment access</td>
          <td className="border border-gray-300 p-3">Routes to business districts and the airport corridor</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-3">North Bangalore outskirts</td>
          <td className="border border-gray-300 p-3">Newer residential developments</td>
          <td className="border border-gray-300 p-3">Existing infrastructure and daily commuting distances</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    A useful comparison should include current property prices per square foot, the complete cost of purchase, and travel times to frequently visited destinations. These details provide a more practical basis for comparing locations than broad assumptions about future value.
  </p>
</div>
<div className="space-y-6 text-gray-800 mb-6">
  <h2 className="text-2xl font-bold">North Bangalore as a Residential Destination</h2>

  <p>
    <a href="https://en.wikipedia.org/wiki/Bengaluru_North_district" rel="nofollow noopener noreferrer"><b>North Bangalore</b></a> brings together residential neighbourhoods, commercial centres, educational institutions, healthcare services, and road connections serving different parts of Bengaluru. These factors make the region relevant to buyers assessing where to live in relation to their work and daily activities.
  </p>

  <p>
    However, the convenience of one neighbourhood may differ from another. Road conditions, access to public transport, and the distance to essential services should be considered at the individual locality and project level.
  </p>

  <h3 className="text-xl font-bold">Residential Development and Buyer Considerations</h3>

  <p>
    When comparing residential projects in North Bangalore, buyers should examine more than the advertised price or apartment size. Usable floor area, maintenance expenses, available facilities, transport options, and the quality of project documentation are also important.
  </p>

  <p>
    For Sobha Park City, the stated Hennur Main Road location is one factor in assessing whether the development suits a buyer's requirements. Checking routes to workplaces, schools, hospitals, and shopping destinations can help establish how well the location fits everyday routines.
  </p>

  <h3 className="text-xl font-bold">Evaluating Sobha Park City's Location</h3>

  <p>
    Sobha Park City is described as a residential apartment development on Hennur Main Road in North Bangalore. The available project information lists 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments in a proposed development covering approximately 50 acres.
  </p>

  <p>
    Prospective buyers should assess the site's road access, public transport connections, proximity to essential services, and likely commuting times. These practical details can help them determine whether the location meets their needs.
  </p>

  <p>
    Before committing to a purchase, buyers should also confirm the project's exact location, current development status, applicable approvals, and RERA registration through official records. Current maps and transport information should be used to verify nearby connections and estimated travel times.
  </p>
</div>
<div className="space-y-6 text-gray-800 mb-6">
  <h2 className="text-2xl font-bold">Most Important Places Connected to Sobha Park City in North Bangalore</h2>

  <p>
    Sobha Park City is described as a residential apartment development on Hennur Main Road in North Bangalore. When evaluating its location, prospective buyers may consider nearby employment centres, major roads, public transport, healthcare facilities, educational institutions, and shopping destinations.
  </p>

  <p>
    The following places are relevant when assessing connectivity from the Hennur area. Actual distances and travel times should be confirmed using the project's exact location and current road conditions.
  </p>

  <h3 className="text-xl font-bold">1. Hennur Main Road</h3>

  <p>
    <a href="https://www.google.com/maps/search/hennur+road" rel="nofollow noopener noreferrer"><b>Hennur Main Road</b></a> is the primary road associated with Sobha Park City's stated location. It connects residential neighbourhoods in North Bangalore and provides access to local shops, schools, healthcare facilities, and connecting roads.
  </p>

  <p>
    For residents, the convenience of this road depends on traffic conditions, access to the project entrance, and the routes used for daily commuting.
  </p>

  <h3 className="text-xl font-bold">2. Hebbal</h3>

  <p>
    Hebbal is an important road junction in North Bangalore, connecting several parts of the city with routes towards the airport. It also provides access to commercial areas and other major transport corridors.
  </p>

  <p>
    For people living in Hennur, Hebbal may be a relevant connection when travelling towards central Bengaluru or the airport corridor. Journey times depend on the route and traffic levels.
  </p>

  <h3 className="text-xl font-bold">3. Manyata Tech Park</h3>

  <p>
    Manyata Tech Park is a major employment destination in North Bangalore, with offices used by technology companies and other businesses. Its location makes it relevant to professionals assessing residential options around Hennur.
  </p>

  <p>
    Homebuyers working at Manyata Tech Park should check the actual commuting distance from Sobha Park City and compare peak-hour travel times before making a decision.
  </p>

  <h3 className="text-xl font-bold">4. Outer Ring Road</h3>

  <p>
    The Outer Ring Road (ORR) connects several commercial and residential areas across Bengaluru. Access to the relevant sections of the road can help commuters travel towards different employment centres.
  </p>

  <p>
    For residents of Sobha Park City, the practical benefit depends on the nearest accessible junction and the traffic conditions along the connecting roads.
  </p>

  <h3 className="text-xl font-bold">5. Kempegowda International Airport</h3>

  <p>
    <a href="https://en.wikipedia.org/wiki/Kempegowda_International_Airport" rel="nofollow noopener noreferrer"><b>Kempegowda International Airport</b></a> is an important destination for domestic and international travel. North Bangalore has road connections towards the airport, making airport access a consideration for frequent travellers.
  </p>

  <p>
    Buyers should check the route from the confirmed project entrance and account for traffic, departure times, and airport check-in requirements when estimating travel time.
  </p>

  <h3 className="text-xl font-bold">6. Yelahanka</h3>

  <p>
    Yelahanka is an established area in North Bangalore with residential neighbourhoods, educational institutions, shopping facilities, and road connections. It is relevant to people who travel between different parts of North Bangalore for work or daily needs.
  </p>

  <p>
    Residents should compare the available routes and travel times to determine how convenient Yelahanka is from the project location.
  </p>

  <h3 className="text-xl font-bold">7. Thanisandra</h3>

  <p>
    Thanisandra is a developing residential and commercial area in North Bangalore. It has residential communities, local retail facilities, and access to employment destinations in the wider northern part of the city.
  </p>

  <p>
    Its relevance to Sobha Park City depends on the exact route and the services a buyer needs to access regularly.
  </p>

  <h3 className="text-xl font-bold">8. Kirloskar Business Park</h3>

  <p>
    Kirloskar Business Park is a commercial destination in North Bangalore. It is relevant to professionals working in the surrounding business areas who are comparing residential locations based on commuting convenience.
  </p>

  <p>
    Buyers should verify the driving distance and peak-hour travel time from Sobha Park City before treating it as a convenient daily commute.
  </p>

  <h3 className="text-xl font-bold">9. Elements Mall</h3>

  <p>
    Elements Mall is a shopping and leisure destination in the Thanisandra area. Shopping centres can provide access to retail stores, dining options, and entertainment facilities.
  </p>

  <p>
    For prospective residents, the useful consideration is the actual journey from the project, along with the availability of other shopping and everyday services closer to home.
  </p>

  <h3 className="text-xl font-bold">10. Bhartiya Mall of Bengaluru</h3>

  <p>
    Bhartiya Mall of Bengaluru is a retail destination in North Bangalore. It can be considered when assessing access to shopping, restaurants, and leisure activities in the wider area.
  </p>

  <p>
    The practical convenience for Sobha Park City residents depends on current road conditions and the distance from the confirmed project entrance.
  </p>

  <h3 className="text-xl font-bold">11. Aster CMI Hospital</h3>

  <p>
    Aster CMI Hospital is a multispeciality healthcare facility in the Hebbal area. Access to hospitals is an important consideration for households evaluating residential locations.
  </p>

  <p>
    Buyers should check the available route, typical travel time, and alternative healthcare facilities closer to the project for routine and emergency needs.
  </p>

  <h3 className="text-xl font-bold">12. Baptist Hospital</h3>

  <p>
    Baptist Hospital is another healthcare institution in North Bangalore. Its location may be relevant to residents who want to understand the availability of medical services across the wider region.
  </p>

  <p>
    The hospital's practical accessibility should be assessed using the actual road route from Sobha Park City rather than straight-line distance alone.
  </p>

  <h3 className="text-xl font-bold">13. Delhi Public School, North Bangalore</h3>

  <p>
    Delhi Public School, North Bangalore is an educational institution that families may consider when comparing residential locations. School access can influence daily travel arrangements, particularly for households with school-age children.
  </p>

  <p>
    Parents should confirm the school's current campus location, admission requirements, and travel time from the project before relying on proximity as a deciding factor.
  </p>

  <h3 className="text-xl font-bold">14. Namma Metro</h3>

  <p>
    Namma Metro provides public transport connections across parts of Bengaluru. For people considering Sobha Park City, the important factors are the nearest operational station, available connecting transport, and the time required to reach it from the project.
  </p>

  <p>
    Any proposed metro extension should be distinguished from an operational service. Buyers should verify current station and route information before making assumptions about future commuting convenience.
  </p>

  <h3 className="text-xl font-bold">15. Bengaluru City Railway Connections</h3>

  <p>
    Railway stations serving North Bangalore and the wider city can be useful for passengers travelling beyond their immediate neighbourhood. The most suitable station will depend on the destination, train service, and available connecting transport.
  </p>

  <p>
    Prospective residents should check the route from Sobha Park City to the relevant station, including traffic conditions and the availability of taxis or buses.
  </p>
</div>
<div className="space-y-6 text-gray-800">
  <h2 className="text-2xl font-bold">Evaluating Sobha Park City's Location</h2>

  <p>
    Sobha Park City's stated location on Hennur Main Road places it within North Bangalore's wider residential area. Nearby employment centres, road connections, schools, hospitals, and shopping destinations are useful factors to consider when evaluating the project.
  </p>

  <p>
    However, the usefulness of each connection depends on the buyer's daily routine. Someone working near Manyata Tech Park may have different commuting priorities from someone travelling regularly to the airport or central Bengaluru.
  </p>

  <p>
    Before booking, buyers should verify the project's exact location, current development status, applicable approvals, and RERA registration. Checking actual travel routes and current public transport services will provide a more reliable picture of the location than relying on general proximity claims alone.
  </p>
</div>
      </div>
    </section>
  );
}
