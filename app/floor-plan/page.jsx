import BlogSection from "@/components/BlogsSection";
import { DEFAULT_IMAGE_ALT, IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import FloorPlanPage from "./FloorPlanPage";

const PATH = "/floor-plan";
const TITLE = "Sobha Park City Floor Plans | 1, 2, 3 & 4 BHK in Hennur Main Road Bangalore";
const DESCRIPTION =
  "Explore reported 1, 2, 3 and 4 BHK apartment layouts at Sobha Park City on Hennur Main Road, North Bangalore. Check unit sizes and approved plans with the developer.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City floor plans",
    "Sobha Park City floor plan brochure",
    "Sobha Park City 1 BHK floor plan",
    "Sobha Park City 2 BHK floor plan",
    "Sobha Park City 3 BHK floor plan",
    "Sobha Park City 4 BHK floor plan",
    "Sobha Park City apartment layouts",
    "Sobha Park City Hennur Main Road floor plans",
    "1 2 3 4 BHK apartments in Hennur",
  ],
  images: [{ ...IMAGES.banner, alt: "Sobha Park City proposed 1, 2, 3 and 4 BHK apartments on Hennur Main Road" }],
});

const FAQS = [
  ["What apartment configurations are available at Sobha Park City?", "Sobha Park City offers 1, 2, 3 and 4 BHK apartments. The listed SBA ranges from 721 sq.ft. for the 1 BHK to 2,500 sq.ft. for the largest 4 BHK configuration."],
  ["What is the floor plan size of a 1 BHK apartment?", "The 1 BHK apartment has a saleable built-up area of 721 sq.ft. It is the smallest listed residential configuration in the township."],
  ["What is the SBA of the 2 BHK floor plan?", "The 2 BHK apartments are available in two size ranges, from 1,200 sq.ft. SBA."],
  ["What are the dimensions of the 3 BHK apartments?", "The 3 BHK apartments have a listed saleable built-up area ranging from 1,600 to 1,900 sq.ft. Exact individual room dimensions should be checked in the detailed floor plan drawing."],
  ["How large are the 4 BHK apartments?", "The 4 BHK homes range from 2,500 sq.ft. SBA, making them the largest apartment configuration in Sobha Park City."],
  ["Are the apartment layouts designed for natural ventilation?", "Yes. The stated planning features include well-ventilated layouts and wide windows intended to allow natural light into the apartments."],
  ["Does Sobha Park City offer Vaastu-compliant apartments?", "The project specifications mention Vaastu-compliant apartment entrances. Buyers can review the respective layout drawings for additional details."],
  ["What is the typical tower structure at Sobha Park City?", "The residential towers and blocks are planned with three basement levels, a ground floor and 42 upper floors, described as 3B + G + 42."],
  ["How many towers and wings are planned?", "The township includes 12 residential towers and blocks comprising 24 wings, with more than 4,000 residential units across the development."],
  ["What flooring materials are specified for the apartments?", "Premium vitrified tiles are specified for living, dining, foyer, bedrooms and kitchen areas. Anti-skid ceramic tiles are specified for balconies and toilets."],
  ["What are the kitchen specifications?", "The stated kitchen specifications include granite counters and provisions for a washing machine and dishwasher."],
  ["What type of windows are specified?", "The specifications mention UPVC window and balcony-door frames with clear glass and mosquito-mesh provision."],
  ["What is the starting price of Sobha Park City apartments?", "The advertised starting price is ₹1.1 Cr onwards. Buyers can request the price applicable to their preferred apartment configuration."],
  ["When is possession planned for Sobha Park City?", "Project completion is planned for November 2031, with possession scheduled for December 2031. RERA registration is awaited."],
];

const schema = pageSchema({ path: PATH, name: "Floor Plan", title: TITLE, description: DESCRIPTION, faqs: FAQS });

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <FloorPlanPage />
      <BlogSection/>
    </>
  );
}
