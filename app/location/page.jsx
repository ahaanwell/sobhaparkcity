import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import LocationPage from "./LocationPage";

const PATH = "/location";
const TITLE = "Sobha Park City Location | Hennur Main Road, North Bangalore";
const DESCRIPTION =
  "Explore the reported Sobha Park City location on Hennur Main Road, North Bangalore. Review road access, nearby services and what to confirm about the exact site address before visiting.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City Hennur location",
    "Sobha Park City Hennur Main Road",
    "Sobha Park City North Bangalore location",
    "Sobha Park City project address",
    "Hennur Main Road Bangalore connectivity",
    "Sobha Park City nearby schools and hospitals",
    "Sobha Park City road access",
    "North Bangalore residential location",
    "Hennur Road location guide",
  ],
  images: [{ ...IMAGES.map, alt: "Sobha Park City proposed location on Hennur Main Road, North Bangalore" }],
});

const FAQS = [
  ["Where is Sobha Park City located in Bangalore?", "Sobha Park City is located on Hennur Main Road in North Bangalore. The proposed 50-acre township is approximately 2 km from Hennur Main Road Metro Station and 6 km from the Outer Ring Road."],
  ["What is the nearest metro station to Sobha Park City?", "Hennur Main Road Metro Station is listed as the nearest metro station, approximately 2 km from the township. The stated road travel time is around 5 minutes."],
  ["How far is Kempegowda International Airport from Sobha Park City?", "Kempegowda International Airport is approximately 18 km from the project, with an estimated driving time of 35 minutes."],
  ["Which IT parks are located near Sobha Park City?", "Manyata Tech Park is approximately 7 km away, while Bhartiya City (IT SEZ) is around 7.9 km away. Kirloskar Business Park is 11.4 km from the township. Other employment destinations include Bagmane Tech Park, SAP Labs India, ITPL and Embassy Tech Village."],
  ["What are the nearest schools to Sobha Park City?", "Bangalore International School is approximately 2.3 km away. VIBGYOR High School and Legacy School are each around 3 km from the township. Delhi Public School (North), Canadian International School and Presidency School are located at greater distances."],
  ["Are hospitals available near Sobha Park City?", "Yes. Apollo Clinics is approximately 2 km from the project. Other listed medical facilities include Columbia Asia (Manipal) Hospital at 7.5 km, Manipal Hospital at 8 km, Cloudnine Hospital at 9.6 km and Aster CMI Hospital at 12 km."],
  ["How far is the Outer Ring Road from Sobha Park City?", "The Outer Ring Road is approximately 6 km from Sobha Park City, with a stated travel time of around 15 minutes. Nagawara Junction is 8 km away, while Hebbal Flyover is approximately 14 km away."],
  ["Which shopping malls are close to Sobha Park City?", "The Forum Value Mall is approximately 5 km away, Mall of Bengaluru is 7.1 km away and Phoenix Mall of Asia is 7.5 km away. Other shopping destinations include Vega City Mall, Orion East Mall, Elements Mall and Orion Mall. Local markets on Hennur Road are around 1 km away."],
  ["What are the popular leisure destinations near Sobha Park City?", "Byrathi Sports Ground is approximately 1.3 km from the township, while Lumbini Gardens is around 11 km away. Devanahalli Fort is listed at 25 km and Nandi Hills at 50 km."],
  ["How far is Manyata Tech Park from Sobha Park City?", "Manyata Tech Park is approximately 7 km from Sobha Park City. The stated travel time is around 18 minutes by road."],
  ["How far are the railway stations from Sobha Park City?", "KR Puram Railway Station is approximately 14 km away, with an estimated travel time of 37 minutes. Bangalore Central Railway Station is around 21 km away and takes about 45 minutes by road."],
  ["What is the average property price on Hennur Main Road?", "The supplied 2026 locality figures indicate average apartment prices of approximately ₹8,650–₹10,600 per sq.ft. Rental yields in the wider Hennur market are estimated at 2%–4%. Sobha Park City has a stated starting price of ₹1.10 Cr onwards."],
  ["What is the RERA status of Sobha Park City?", "As per the project information supplied, Karnataka RERA registration is awaited. Buyers should check the latest registration details and project approvals before making a booking or payment."],
  ["When is Sobha Park City expected to launch?", "The pre-launch opened in November 2026, and the project launch is planned for December 2026, according to the supplied project schedule."],
];

const schema = pageSchema({ path: PATH, name: "Location", title: TITLE, description: DESCRIPTION, image: IMAGES.banner.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <LocationPage />
      <BlogSection/>
    </>
  );
}
