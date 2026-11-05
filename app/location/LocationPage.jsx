/* eslint-disable react/no-unescaped-entities */
import DownloadActions from "@/components/DownloadActions";
import PageHero from "@/components/PageHero";
import { ExtLink, IntLink } from "@/components/SeoLinks";
import Link from "next/link";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2321051781355!2d77.6299432!3d13.0208861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171e2f9917d3%3A0xa89ad8fa1447f15a!2sHennur%20Main%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1793038070353!5m2!1sen!2sin";

function LocationPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha Park City Location
          </h1>
          <DownloadActions/>
          <div className="space-y-6 text-gray-800 mt-6">
  <p><a href="https://www.sobhaparkcity.com/"><strong>Sobha Park City</strong></a> is located on <b>Hennur Main Road in North Bangalore</b>, within a <b>50-acre</b> residential township planned by <b>Sobha Limited</b>. The development comprises more than <b>4,000 apartments</b> across 12 residential towers and 24 wings, with configurations ranging from 1 to 4 BHK. Its location provides access to key roads, employment centres, educational institutions, healthcare facilities, shopping destinations and public transport.</p>

  <p>The township is approximately 2 km from Hennur Main Road Metro Station, 6 km from the Outer Ring Road (ORR) and 7 km from Manyata Tech Park. Bhartiya City, schools, hospitals and everyday shopping facilities are also accessible from the neighbourhood.</p>

  <p>For homebuyers considering North Bangalore, the surrounding infrastructure is an important part of evaluating the address. The following sections cover the major routes and nearby facilities, along with their stated distances and estimated travel times.</p>
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

  <h2 className="text-2xl font-bold">Where Is Sobha Park City Located?</h2>

  <p>Sobha Park City is situated on Hennur Main Road, North Bangalore, a residential and commercial corridor connecting several established neighbourhoods. The location offers road access towards Nagawara, Hebbal and the Outer Ring Road, while nearby markets provide options for regular household shopping.</p>

  <p>The project is planned across 50 acres, with 12 residential towers comprising 24 wings. Each tower is designed with a structure of 3 basements, a ground floor and 42 upper floors (3B + G + 42). Apartment choices include 1, 2, 3 and 4 BHK homes.</p>

  <h3 className="text-xl font-bold">Project Location at a Glance</h3>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Particulars</th>
          <th className="border border-gray-300 p-3 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Project</td><td className="border border-gray-300 p-3">Sobha Park City</td></tr>
        <tr><td className="border border-gray-300 p-3">Developer</td><td className="border border-gray-300 p-3">Sobha Limited</td></tr>
        <tr><td className="border border-gray-300 p-3">Address</td><td className="border border-gray-300 p-3">Hennur Main Road</td></tr>
        <tr><td className="border border-gray-300 p-3">Locality</td><td className="border border-gray-300 p-3">North Bangalore</td></tr>
        <tr><td className="border border-gray-300 p-3">Land area</td><td className="border border-gray-300 p-3">50 acres</td></tr>
        <tr><td className="border border-gray-300 p-3">Development type</td><td className="border border-gray-300 p-3">Integrated residential township</td></tr>
        <tr><td className="border border-gray-300 p-3">Residential towers</td><td className="border border-gray-300 p-3">12</td></tr>
        <tr><td className="border border-gray-300 p-3">Tower wings</td><td className="border border-gray-300 p-3">24</td></tr>
        <tr><td className="border border-gray-300 p-3">Structure</td><td className="border border-gray-300 p-3">3B + G + 42 floors</td></tr>
        <tr><td className="border border-gray-300 p-3">Total apartments</td><td className="border border-gray-300 p-3">4,000+</td></tr>
        <tr><td className="border border-gray-300 p-3">Apartment configurations</td><td className="border border-gray-300 p-3">1, 2, 3 and 4 BHK</td></tr>
        <tr><td className="border border-gray-300 p-3">Nearest metro station</td><td className="border border-gray-300 p-3">Hennur Main Road Metro Station – 2 km</td></tr>
        <tr><td className="border border-gray-300 p-3">Outer Ring Road</td><td className="border border-gray-300 p-3">6 km</td></tr>
        <tr><td className="border border-gray-300 p-3">Manyata Tech Park</td><td className="border border-gray-300 p-3">7 km</td></tr>
        <tr><td className="border border-gray-300 p-3">Local markets</td><td className="border border-gray-300 p-3">Approximately 1 km</td></tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold">Connectivity and Transportation Around Sobha Park City</h2>

  <p>The location connects with different parts of Bangalore through Hennur Main Road and its surrounding road network. Residents can access the Outer Ring Road, Nagawara Junction and Hebbal Flyover for onward journeys. Railway stations and Kempegowda International Airport provide additional travel options.</p>

  <p>The following table brings together the key transportation points near the project.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Transport destination</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Hennur Main Road Metro Station</td><td className="border border-gray-300 p-3">2 km</td><td className="border border-gray-300 p-3">5 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Outer Ring Road (ORR)</td><td className="border border-gray-300 p-3">6 km</td><td className="border border-gray-300 p-3">15 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Nagawara Junction</td><td className="border border-gray-300 p-3">8 km</td><td className="border border-gray-300 p-3">24 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Hebbal Flyover</td><td className="border border-gray-300 p-3">14 km</td><td className="border border-gray-300 p-3">26 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">KR Puram Railway Station</td><td className="border border-gray-300 p-3">14 km</td><td className="border border-gray-300 p-3">37 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Kempegowda International Airport</td><td className="border border-gray-300 p-3">18 km</td><td className="border border-gray-300 p-3">35 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Bangalore Central Railway Station</td><td className="border border-gray-300 p-3">21 km</td><td className="border border-gray-300 p-3">About 45 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>These distances provide a general picture of the township's access to the city's road, rail and air transport network. Actual journey times may vary depending on traffic and the route taken.</p>

  <h3 className="text-xl font-bold">Road Network and Major Junctions</h3>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/road-network.webp"
              alt="Road Network"
              loading="lazy"
              title="Road Network Near Sobha Park City"
            />
  <p>Hennur Main Road is the primary road connection for Sobha Park City. It provides access towards Nagawara and other parts of North Bangalore, while the Outer Ring Road connects the neighbourhood with several important employment and residential areas.</p>

  <p>Some of the main road connections include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Outer Ring Road (ORR):</strong> Approximately 6 km away, with an estimated drive of 15 minutes.</li>
    <li><strong>Nagawara Junction:</strong> Around 8 km from the project, taking approximately 24 minutes.</li>
    <li><strong>Hebbal Flyover:</strong> Located about 14 km away, with a stated travel time of 26 minutes.</li>
    <li><strong>Hennur Road local markets:</strong> Around 1 km away, making routine shopping accessible within approximately 3 minutes.</li>
  </ul>

  <p>The surrounding road network is useful for people travelling towards nearby employment hubs, commercial districts and other parts of Bangalore. The ORR is an important connection for journeys towards the eastern side of the city.</p>

  <h3 className="text-xl font-bold">Metro and Railway Access</h3>

  <h3 className="text-xl font-bold">Metro Station Near Sobha Park City</h3>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/metro-station.webp"
              alt="Metro Station"
              loading="lazy"
              title="Metro Station Near Sobha Park City"
            />
  <p>Hennur Main Road Metro Station is identified as the nearest metro connection, at an approximate distance of 2 km from Sobha Park City. The stated road journey is around 5 minutes.</p>

  <p>This proximity may be useful for residents who prefer public transport for selected journeys instead of depending entirely on private vehicles. The metro network can also support travel for work, education and other city activities.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Metro connection</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Hennur Main Road Metro Station</td><td className="border border-gray-300 p-3">2 km</td><td className="border border-gray-300 p-3">5 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <h3 className="text-xl font-bold">Railway Stations</h3>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/railway-station.webp"
              alt="Railway Station"
              loading="lazy"
              title="Railway Station Near Sobha Park City"
            />
  <p>For intercity journeys and train travel, residents can access railway stations in different parts of Bangalore. KR Puram Railway Station is approximately 14 km from the township, while Bangalore Central Railway Station is around 21 km away.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Railway station</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">KR Puram Railway Station</td><td className="border border-gray-300 p-3">14 km</td><td className="border border-gray-300 p-3">37 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Bangalore Central Railway Station</td><td className="border border-gray-300 p-3">21 km</td><td className="border border-gray-300 p-3">About 45 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>These stations offer additional travel options for residents receiving visitors or travelling to destinations outside Bangalore.</p>

  <h3 className="text-xl font-bold">Airport Connectivity</h3>
  <img width={1000} height={664}
              className="w-full lg:w-1/2 m-auto mb-6"
              src="/images/airport.webp"
              alt="Airport Connectivity"
              loading="lazy"
              title="Airport Connectivity Near Sobha Park City"
            />
  <p>Kempegowda International Airport is approximately 18 km from Sobha Park City, with a stated driving time of around 35 minutes. The airport serves domestic and international air travel and is an important transport connection for frequent flyers.</p>

  <p>The Hennur–Bagaluru Road and New Airport Road are among the routes mentioned for reaching the airport from this part of North Bangalore. Travellers should allow additional time during busy traffic periods, particularly when planning early-morning or late-night flights.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Airport</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Kempegowda International Airport</td><td className="border border-gray-300 p-3">18 km</td><td className="border border-gray-300 p-3">35 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-2xl font-bold">IT Parks and Employment Centres Nearby</h2>

  <p>One of the location advantages of Sobha Park City is its proximity to employment centres in North Bangalore. Manyata Tech Park and Bhartiya City are among the closest major work destinations. Other business parks and technology campuses in East Bangalore are also accessible by road.</p>

  <p>This location may be relevant to professionals working in and around Nagawara, Hebbal and the wider eastern employment corridor.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Employment hub</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Manyata Tech Park</td><td className="border border-gray-300 p-3">7 km</td><td className="border border-gray-300 p-3">18 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Bhartiya City (IT SEZ)</td><td className="border border-gray-300 p-3">7.9 km</td><td className="border border-gray-300 p-3">15 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Kirloskar Business Park</td><td className="border border-gray-300 p-3">11.4 km</td><td className="border border-gray-300 p-3">20 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Bagmane Tech Park</td><td className="border border-gray-300 p-3">18 km</td><td className="border border-gray-300 p-3">50 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">SAP Labs India</td><td className="border border-gray-300 p-3">20 km</td><td className="border border-gray-300 p-3">56 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">ITPL (International Tech Park Ltd.)</td><td className="border border-gray-300 p-3">21 km</td><td className="border border-gray-300 p-3">1 hour 2 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Embassy Tech Village</td><td className="border border-gray-300 p-3">23 km</td><td className="border border-gray-300 p-3">1 hour 9 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>Manyata Tech Park and Bhartiya City are particularly relevant for professionals whose workplaces are in North Bangalore. Those working at the more distant technology campuses may need to account for longer daily journeys.</p>

  <h2 className="text-2xl font-bold">Schools and Educational Institutions Near the Project</h2>

  <p>Families evaluating Sobha Park City can consider the schools located around Hennur, Nagawara and neighbouring parts of North Bangalore. Bangalore International School, VIBGYOR High School and Legacy School are listed within approximately 3 km of the township.</p>

  <p>Other educational options include Delhi Public School (North), Canadian International School and Presidency School.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">School</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Bangalore International School</td><td className="border border-gray-300 p-3">2.3 km</td><td className="border border-gray-300 p-3">8 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">VIBGYOR High School</td><td className="border border-gray-300 p-3">3 km</td><td className="border border-gray-300 p-3">8 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Legacy School</td><td className="border border-gray-300 p-3">3 km</td><td className="border border-gray-300 p-3">10 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Delhi Public School (North)</td><td className="border border-gray-300 p-3">7.6 km</td><td className="border border-gray-300 p-3">18 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Canadian International School</td><td className="border border-gray-300 p-3">10 km</td><td className="border border-gray-300 p-3">24 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Presidency School</td><td className="border border-gray-300 p-3">14 km</td><td className="border border-gray-300 p-3">35 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>The nearby schools provide options for families with school-going children, while institutions at greater distances offer additional choices depending on educational requirements and preferred curriculum.</p>

  <h2 className="text-2xl font-bold">Hospitals and Medical Facilities Around Sobha Park City</h2>

  <p>Healthcare access is another factor to consider when choosing a residential location. Apollo Clinics is approximately 2 km from Sobha Park City, providing a nearby option for routine medical consultations. Other hospitals in the surrounding areas include Columbia Asia (Manipal) Hospital, Manipal Hospital, Cloudnine Hospital and Aster CMI Hospital.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Hospital or medical facility</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Apollo Clinics</td><td className="border border-gray-300 p-3">2 km</td><td className="border border-gray-300 p-3">5 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Columbia Asia (Manipal) Hospital</td><td className="border border-gray-300 p-3">7.5 km</td><td className="border border-gray-300 p-3">15 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Manipal Hospital</td><td className="border border-gray-300 p-3">8 km</td><td className="border border-gray-300 p-3">19 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Cloudnine Hospital</td><td className="border border-gray-300 p-3">9.6 km</td><td className="border border-gray-300 p-3">25 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Columbia Asia Hospital</td><td className="border border-gray-300 p-3">11 km</td><td className="border border-gray-300 p-3">31 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Aster CMI Hospital</td><td className="border border-gray-300 p-3">12 km</td><td className="border border-gray-300 p-3">25 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Fortis Hospital</td><td className="border border-gray-300 p-3">15 km</td><td className="border border-gray-300 p-3">53 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>The presence of clinics and hospitals at different distances gives residents multiple healthcare options. Travel times can differ depending on the time of day and traffic conditions.</p>

  <h2 className="text-2xl font-bold">Shopping, Groceries and Retail Destinations</h2>

  <p>Daily shopping requirements can be met through local markets along Hennur Main Road, approximately 1 km from the project. For larger retail visits, residents can travel to shopping destinations such as The Forum Value Mall, Mall of Bengaluru and Phoenix Mall of Asia.</p>

  <p>Other listed destinations include Vega City Mall, Orion East Mall, Elements Mall and Orion Mall.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Shopping destination</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Local markets on Hennur Road</td><td className="border border-gray-300 p-3">1 km</td><td className="border border-gray-300 p-3">3 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">The Forum Value Mall</td><td className="border border-gray-300 p-3">5 km</td><td className="border border-gray-300 p-3">12 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Mall of Bengaluru</td><td className="border border-gray-300 p-3">7.1 km</td><td className="border border-gray-300 p-3">15 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Phoenix Mall of Asia</td><td className="border border-gray-300 p-3">7.5 km</td><td className="border border-gray-300 p-3">18 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Vega City Mall</td><td className="border border-gray-300 p-3">8 km</td><td className="border border-gray-300 p-3">20 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Orion East Mall</td><td className="border border-gray-300 p-3">9.5 km</td><td className="border border-gray-300 p-3">20 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Elements Mall</td><td className="border border-gray-300 p-3">12 km</td><td className="border border-gray-300 p-3">25 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Orion Mall</td><td className="border border-gray-300 p-3">14 km</td><td className="border border-gray-300 p-3">30 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>The nearby markets are useful for regular purchases, while the larger shopping centres provide additional retail, dining and entertainment options.</p>

  <h2 className="text-2xl font-bold">Parks, Recreation and Weekend Destinations</h2>

  <p>The Hennur neighbourhood and nearby parts of North Bangalore offer several destinations for outdoor activities and leisure. Byrathi Sports Ground is approximately 1.3 km from Sobha Park City, while Lumbini Gardens is around 11 km away.</p>

  <p>For longer weekend outings, residents can consider destinations such as Devanahalli Fort and Nandi Hills.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Leisure destination</th>
          <th className="border border-gray-300 p-3 text-left">Distance</th>
          <th className="border border-gray-300 p-3 text-left">Estimated travel time</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Byrathi Sports Ground</td><td className="border border-gray-300 p-3">1.3 km</td><td className="border border-gray-300 p-3">5 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Lumbini Gardens</td><td className="border border-gray-300 p-3">11 km</td><td className="border border-gray-300 p-3">25 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Devanahalli Fort</td><td className="border border-gray-300 p-3">25 km</td><td className="border border-gray-300 p-3">35 minutes</td></tr>
        <tr><td className="border border-gray-300 p-3">Nandi Hills</td><td className="border border-gray-300 p-3">50 km</td><td className="border border-gray-300 p-3">1 hour 15 minutes</td></tr>
      </tbody>
    </table>
  </div>

  <p>Apart from these external destinations, the proposed township includes a clubhouse measuring more than 25,000 sq.ft. and approximately 80% open space, adding recreational and open areas within the development.</p>

  <h2 className="text-2xl font-bold">Everyday Travel: Work, School and Family Requirements</h2>

  <p>The location can be assessed through the everyday journeys that residents may need to make. Professionals working at Manyata Tech Park have a stated commute of approximately 18 minutes, while Bhartiya City is listed at around 15 minutes. Kirloskar Business Park is approximately 20 minutes away.</p>

  <p>For people working in East Bangalore, the journey may be longer. Bagmane Tech Park is listed at 50 minutes, SAP Labs India at 56 minutes, ITPL at 1 hour 2 minutes and Embassy Tech Village at 1 hour 9 minutes.</p>

  <p>Families also have educational and healthcare facilities at different distances. Bangalore International School is approximately 2.3 km away, while VIBGYOR High School and Legacy School are each around 3 km away. Apollo Clinics is approximately 2 km from the township, and Columbia Asia (Manipal) Hospital is listed at 7.5 km.</p>

  <p>These nearby destinations make the location worth considering for households whose regular activities are centred around Hennur, Nagawara and North Bangalore.</p>

  <h2 className="text-2xl font-bold">Hennur Main Road and Its Neighbourhood Development</h2>

  <p>Hennur Main Road has developed from a relatively low-density settlement belt into an established residential and commercial corridor in North Bangalore. The surrounding neighbourhoods include Geddalahalli, Banaswadi, Kalyan Nagar, HBR Layout and Narayanapura.</p>

  <p>The road and its connecting neighbourhoods now accommodate residential communities, commercial establishments, educational institutions, healthcare facilities and local shopping areas.</p>

  <h3 className="text-xl font-bold">Residential and Commercial Growth</h3>

  <p>The growth of Bangalore's technology sector during the late 1990s contributed to increased interest in residential areas across the city. Interest in North Bangalore also gained momentum following the announcement of the international airport at Devanahalli in the mid-2000s.</p>

  <p>Hennur Road subsequently attracted residential development, including apartment communities and larger gated developments. Its proximity to employment centres such as Manyata Tech Park and Kirloskar Business Park has contributed to its appeal among working professionals.</p>

  <h3 className="text-xl font-bold">Neighbourhood Infrastructure</h3>

  <p>The Hennur corridor is associated with several established residential neighbourhoods and everyday facilities. Its surroundings include:</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Employment access:</strong> Manyata Tech Park in Nagawara and Kirloskar Business Park are among the nearby employment destinations.</li>
    <li><strong>Educational facilities:</strong> Schools and educational institutions are available across Hennur and neighbouring localities.</li>
    <li><strong>Healthcare:</strong> Clinics and multi-speciality hospitals are accessible within the wider North Bangalore area.</li>
    <li><strong>Retail facilities:</strong> Local markets and shopping centres such as Elements Mall serve residents in the surrounding neighbourhoods.</li>
    <li><strong>Residential communities:</strong> The corridor includes apartment developments and gated residential communities.</li>
    <li><strong>Nearby natural landmarks:</strong> Kannur Lake is among the local landmarks in the wider area.</li>
  </ul>

  <h3 className="text-xl font-bold">Major Road and Rail Connections</h3>

  <p>Hennur Main Road connects with important routes towards Nagawara, Hebbal, Banaswadi and the Outer Ring Road. The surrounding road network includes multi-lane stretches and service roads that support movement through the corridor.</p>

  <p>For airport journeys, motorists can consider Hennur–Bagaluru Road or New Airport Road towards Kempegowda International Airport. Banaswadi Railway Station is approximately 5.5–6 km from Hennur Road, while KR Puram and Yeshwantpur railway stations provide additional rail connections in the wider city.</p>

  <h2 className="text-2xl font-bold">Hennur Road Property Market and Residential Demand</h2>

  <p>Hennur Road has become an established residential market in North Bangalore, with options ranging from ready-to-move apartments to premium and luxury developments.</p>

  <p>The area-wide market figures supplied for 2026 place average apartment prices at approximately ₹8,650–₹10,600 per sq.ft. By comparison, prices in Hebbal are stated to exceed ₹13,000 per sq.ft. Rental yields across the Hennur market are estimated at around 2%–4%, with demand supported in part by professionals working in nearby employment centres.</p>

  <p>These figures represent the broader locality and should not be treated as the confirmed pricing or rental return for an individual property. Sobha Park City has a stated starting price of ₹1.1 Cr onwards, with configuration-wise prices available on request.</p>

  <h2 className="text-2xl font-bold">What Makes the Sobha Park City Location Worth Considering?</h2>

  <p>The project's location brings together several facilities and transport connections that may be relevant to different types of homebuyers.</p>

  <ul className="list-disc space-y-2 pl-6">
    <li><strong>Access to the metro:</strong> Hennur Main Road Metro Station is approximately 2 km away.</li>
    <li><strong>Nearby employment centres:</strong> Manyata Tech Park is 7 km away, while Bhartiya City is 7.9 km away.</li>
    <li><strong>Schools within a short drive:</strong> Bangalore International School, VIBGYOR High School and Legacy School are listed within 3 km.</li>
    <li><strong>Healthcare facilities:</strong> Apollo Clinics is approximately 2 km from the project.</li>
    <li><strong>Shopping for everyday needs:</strong> Hennur Road's local markets are around 1 km away.</li>
    <li><strong>Road connections:</strong> The Outer Ring Road is approximately 6 km away, with Nagawara Junction and Hebbal Flyover also accessible.</li>
    <li><strong>Airport access:</strong> Kempegowda International Airport is listed at 18 km.</li>
  </ul>

  <p>Together, these connections make Hennur Main Road a location that can be evaluated by professionals, families and buyers looking for a residential address in North Bangalore.</p>

  <h2 className="text-2xl font-bold">Sobha Park City Location – Project and Launch Details</h2>

  <p>Sobha Park City is a proposed 50-acre residential township on Hennur Main Road, North Bangalore. The project is planned with more than 4,000 apartments across 12 towers and 24 wings, with 1, 2, 3 and 4 BHK configurations.</p>

  <p>The pre-launch opened in November 2026, and the project launch is planned for December 2026. Karnataka RERA registration is awaited, based on the project information supplied.</p>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-3 text-left">Project detail</th>
          <th className="border border-gray-300 p-3 text-left">Information</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-3">Project name</td><td className="border border-gray-300 p-3">Sobha Park City</td></tr>
        <tr><td className="border border-gray-300 p-3">Location</td><td className="border border-gray-300 p-3">Hennur Main Road, North Bangalore</td></tr>
        <tr><td className="border border-gray-300 p-3">Developer</td><td className="border border-gray-300 p-3">Sobha Limited</td></tr>
        <tr><td className="border border-gray-300 p-3">Land area</td><td className="border border-gray-300 p-3">50 acres</td></tr>
        <tr><td className="border border-gray-300 p-3">Apartment count</td><td className="border border-gray-300 p-3">4,000+</td></tr>
        <tr><td className="border border-gray-300 p-3">Towers</td><td className="border border-gray-300 p-3">12</td></tr>
        <tr><td className="border border-gray-300 p-3">Wings</td><td className="border border-gray-300 p-3">24</td></tr>
        <tr><td className="border border-gray-300 p-3">Apartment types</td><td className="border border-gray-300 p-3">1, 2, 3 and 4 BHK</td></tr>
        <tr><td className="border border-gray-300 p-3">Starting price</td><td className="border border-gray-300 p-3">₹1.1 Cr onwards</td></tr>
        <tr><td className="border border-gray-300 p-3">Pre-launch</td><td className="border border-gray-300 p-3">November 2026</td></tr>
        <tr><td className="border border-gray-300 p-3">Planned launch</td><td className="border border-gray-300 p-3">December 2026</td></tr>
        <tr><td className="border border-gray-300 p-3">RERA status</td><td className="border border-gray-300 p-3">Registration awaited</td></tr>
      </tbody>
    </table>
  </div>

  <p>For the latest project information, pricing and site-visit arrangements, homebuyers can contact the sales team.</p>
</div>
<div className="space-y-6 text-gray-800 mt-6">
  <h2 className="text-2xl font-bold">Frequently Asked Questions About Sobha Park City Location</h2>

  <h3 className="text-xl font-bold">1. Where is Sobha Park City located in Bangalore?</h3>
  <p>Sobha Park City is located on Hennur Main Road in North Bangalore. The proposed 50-acre township is approximately 2 km from Hennur Main Road Metro Station and 6 km from the Outer Ring Road.</p>

  <h3 className="text-xl font-bold">2. What is the nearest metro station to Sobha Park City?</h3>
  <p>Hennur Main Road Metro Station is listed as the nearest metro station, approximately 2 km from the township. The stated road travel time is around 5 minutes.</p>

  <h3 className="text-xl font-bold">3. How far is Kempegowda International Airport from Sobha Park City?</h3>
  <p>Kempegowda International Airport is approximately 18 km from the project, with an estimated driving time of 35 minutes.</p>

  <h3 className="text-xl font-bold">4. Which IT parks are located near Sobha Park City?</h3>
  <p>Manyata Tech Park is approximately 7 km away, while Bhartiya City (IT SEZ) is around 7.9 km away. Kirloskar Business Park is 11.4 km from the township. Other employment destinations include Bagmane Tech Park, SAP Labs India, ITPL and Embassy Tech Village.</p>

  <h3 className="text-xl font-bold">5. What are the nearest schools to Sobha Park City?</h3>
  <p>Bangalore International School is approximately 2.3 km away. VIBGYOR High School and Legacy School are each around 3 km from the township. Delhi Public School (North), Canadian International School and Presidency School are located at greater distances.</p>

  <h3 className="text-xl font-bold">6. Are hospitals available near Sobha Park City?</h3>
  <p>Yes. Apollo Clinics is approximately 2 km from the project. Other listed medical facilities include Columbia Asia (Manipal) Hospital at 7.5 km, Manipal Hospital at 8 km, Cloudnine Hospital at 9.6 km and Aster CMI Hospital at 12 km.</p>

  <h3 className="text-xl font-bold">7. How far is the Outer Ring Road from Sobha Park City?</h3>
  <p>The Outer Ring Road is approximately 6 km from Sobha Park City, with a stated travel time of around 15 minutes. Nagawara Junction is 8 km away, while Hebbal Flyover is approximately 14 km away.</p>

  <h3 className="text-xl font-bold">8. Which shopping malls are close to Sobha Park City?</h3>
  <p>The Forum Value Mall is approximately 5 km away, Mall of Bengaluru is 7.1 km away and Phoenix Mall of Asia is 7.5 km away. Other shopping destinations include Vega City Mall, Orion East Mall, Elements Mall and Orion Mall. Local markets on Hennur Road are around 1 km away.</p>

  <h3 className="text-xl font-bold">9. What are the popular leisure destinations near Sobha Park City?</h3>
  <p>Byrathi Sports Ground is approximately 1.3 km from the township, while Lumbini Gardens is around 11 km away. Devanahalli Fort is listed at 25 km and Nandi Hills at 50 km.</p>

  <h3 className="text-xl font-bold">10. How far is Manyata Tech Park from Sobha Park City?</h3>
  <p>Manyata Tech Park is approximately 7 km from Sobha Park City. The stated travel time is around 18 minutes by road.</p>

  <h3 className="text-xl font-bold">11. How far are the railway stations from Sobha Park City?</h3>
  <p>KR Puram Railway Station is approximately 14 km away, with an estimated travel time of 37 minutes. Bangalore Central Railway Station is around 21 km away and takes about 45 minutes by road.</p>

  <h3 className="text-xl font-bold">12. What is the average property price on Hennur Main Road?</h3>
  <p>The supplied 2026 locality figures indicate average apartment prices of approximately ₹8,650–₹10,600 per sq.ft. Rental yields in the wider Hennur market are estimated at 2%–4%. Sobha Park City has a stated starting price of ₹1.10 Cr onwards.</p>

  <h3 className="text-xl font-bold">13. What is the RERA status of Sobha Park City?</h3>
  <p>As per the project information supplied, Karnataka RERA registration is awaited. Buyers should check the latest registration details and project approvals before making a booking or payment.</p>

  <h3 className="text-xl font-bold">14. When is Sobha Park City expected to launch?</h3>
  <p>The pre-launch opened in November 2026, and the project launch is planned for December 2026, according to the supplied project schedule.</p>
</div>
        </div>
      </main>
    </>
  );
}

export default LocationPage;
