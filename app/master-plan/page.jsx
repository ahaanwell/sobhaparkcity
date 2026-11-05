import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import MasterPlanPage from "./MasterPlanPage";

const PATH = "/master-plan";
const TITLE = "Sobha Park City Master Plan | 50 Acres Township Layout";
const DESCRIPTION =
  "Explore Sobha Park City Master Plan with 12 towers, 24 wings, 80% open space, 4,000+ apartments, clubhouse, landscaped gardens and township amenities.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City master plan",
    "Sobha Park City site layout",
    "Sobha Park City tower layout",
    "Sobha Park City 50 acre master plan",
    "Sobha Park City 12 towers",
    "Sobha Park City 4400 apartments",
    "Sobha Park City Hennur master plan",
    "Sobha Park City Hennur Main Road site plan",
    "North Bangalore apartment township master plan",
  ],
  images: [{ ...IMAGES.masterPlan, alt: "Reported Sobha Park City master plan for the proposed Hennur Main Road development" }],
});

const FAQS = [
  ["What is the total area of Sobha Park City?", "Sobha Park City is planned across 50 acres on Hennur Main Road in North Bangalore. The township includes 12 residential towers and blocks, 24 wings and more than 4,000 apartments."],
  ["How many residential towers are included in the master plan?", "The development comprises 12 residential towers and blocks divided into 24 wings. Each tower is planned with three basement levels, a ground floor and 42 upper floors."],
  ["What is the total number of apartments in Sobha Park City?", "More than 4,000 residential apartments are planned across the 50-acre township."],
  ["How much of the township is allocated to open space?", "Approximately 80% of the project area is planned as open space. The landscape features also include more than 1,000 native trees, gardens and outdoor lawns."],
  ["What are the main features of the Sobha Park City master plan?", "The master plan includes residential towers, landscaped gardens, a 25,000+ sq.ft. clubhouse, swimming pool, sports courts, jogging track, children's play area, senior citizens' zone, pet park and supporting infrastructure."],
  ["What clubhouse facilities are planned?", "The grand clubhouse is planned with a multipurpose hall, banquet hall, mini theatre, library, co-working space and other recreational facilities. The wider amenity offering also includes fitness, sports and wellness spaces."],
  ["Does the township include sports facilities?", "Yes. The planned facilities include badminton, squash, futsal, tennis courts, cricket nets, bowling alley, skating rink, indoor games, swimming pool and jogging track."],
  ["What are the green features of the master plan?", "The proposed green features include approximately 80% open space, more than 1,000 native trees, landscaped gardens, lawns, rainwater harvesting and organic waste converters."],
  ["What parking and utility provisions are included?", "The development includes dedicated parking with EV-charging provisions, 24/7 security, power backup, a sewage treatment plant, rainwater harvesting and organic waste converters."],
  ["What apartment configurations are available?", "Sobha Park City offers 1, 2, 3 and 4 BHK apartments. Their listed SBA ranges from 721 sq.ft. to 2,500 sq.ft."],
  ["Where is Sobha Park City located?", "The project is located on Hennur Main Road in North Bangalore. The supplied connectivity details include Hennur Main Road Metro Station at 2 km, Outer Ring Road at 6 km and Manyata Tech Park at 7 km."],
  ["What is the starting price of Sobha Park City?", "The advertised starting price is ₹1.1 Cr onwards. Buyers can request configuration-specific pricing for the available apartment types."],
  ["When will Sobha Park City be launched?", "The pre-launch opened in November 2026, and the formal project launch is planned for December 2026."],
  ["When is possession expected?", "Project completion is planned for November 2031, and possession is scheduled for December 2031. RERA registration is awaited."],
];

const schema = pageSchema({ path: PATH, name: "Master Plan", title: TITLE, description: DESCRIPTION, image: IMAGES.masterPlan.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <MasterPlanPage />
      <BlogSection/>
    </>
  );
}
