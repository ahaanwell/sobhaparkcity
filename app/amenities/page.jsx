import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesPage from "./AmenitiesPage";

const PATH = "/amenities";
const TITLE = "Sobha Park City Amenities | Clubhouse, Sports & Lifestyle";
const DESCRIPTION =
  "Explore Sobha Park City amenities, including its 25,000+ sq.ft. clubhouse, swimming pools, gym, sports courts, spa, landscaped gardens and family facilities in Hennur, Bangalore.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City facilities list",
    "Sobha Park City Hennur amenities",
    "Sobha Park City clubhouse",
    "Sobha Park City clubhouse size",
    "Sobha Park City lifestyle amenities",
    "Sobha Park City sports facilities",
    "Sobha Park City kids play area",
    "Sobha Park City landscaped open space",
    "Sobha Hennur clubhouse",
    "gated community facilities Hennur Bangalore",
  ],
  images: [{ ...IMAGES.amenities, alt: "Lifestyle facilities at Sobha Park City, Hennur Main Road, Bangalore" }],
});

const FAQS = [
  ["What are the main amenities at Sobha Park City?", "The proposed amenities include a 25,000+ sq.ft. clubhouse, swimming pool, indoor heated pool, gymnasium, luxury spa, tennis courts, jogging track, landscaped gardens, children's play area and dedicated community spaces."],
  ["What facilities are planned inside the clubhouse?", "The clubhouse is planned to include a multipurpose hall, banquet hall, mini theatre, library, co-working space, recreational areas and a retail plaza. The development also includes outdoor workstations and an amphitheatre."],
  ["Which sports facilities are available at Sobha Park City?", "The planned sports facilities include badminton, squash, futsal and tennis courts, cricket nets, a bowling alley, skating rink, outdoor sports courts, indoor games and a billiards or pool table."],
  ["Does Sobha Park City have a swimming pool?", "Yes. The proposed wellness facilities include a swimming pool and an indoor heated pool, along with a luxury spa, yoga pavilion and meditation area."],
  ["How large is the clubhouse at Sobha Park City?", "The proposed grand clubhouse covers more than 25,000 sq.ft. and is planned to accommodate indoor recreation, social gatherings, celebrations, reading and co-working activities."],
  ["How much open space is planned at Sobha Park City?", "Approximately 80% of the 50-acre township is planned as open space. The landscape plan also includes more than 1,000 native trees, landscaped gardens, a party lawn and an outdoor party terrace."],
  ["Are there amenities for children and senior citizens?", "Yes. The proposed facilities include a children's play area and crèche for younger residents, along with a dedicated senior citizens' zone for older members of the community."],
  ["Does the project include facilities for pets?", "Yes. A pet park is included in the proposed outdoor and lifestyle amenities."],
  ["What security and sustainability facilities are planned?", "The proposed services include 24/7 security, power backup, EV charging provisions, rainwater harvesting, waste management and organic waste converters."],
  ["Are the Sobha Park City amenities ready for use?", "No. The facilities form part of a proposed residential development. The pre-launch opened in November 2026, the launch is planned for December 2026, completion is planned for November 2031 and possession is expected in December 2031, based on the supplied project schedule. Buyers should confirm the latest development status with the project team."],
];

const schema = pageSchema({ path: PATH, name: "Amenities", title: TITLE, description: DESCRIPTION, image: IMAGES.amenities.url, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <AmenitiesPage />
      <BlogSection/>
    </>
  );
}
