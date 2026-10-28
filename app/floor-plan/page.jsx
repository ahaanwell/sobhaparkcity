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
  ["What apartment configurations are planned at Sobha Park City?", "The proposed apartment configurations are 1, 2, 3 and 4 BHK. Confirm the final available configurations with the developer."],
  ["What are the stated Sobha Park City apartment sizes?", "The supplied size range is 750 to 2,600 sq. ft. Check the latest approved floor plans and confirm the area measurement used for each apartment."],
  ["Are the Sobha Park City floor plans final?", "Treat the plans and sizes as proposed information until confirmed in the developer's current approved plans and project documents."],
  ["How can I request the latest Sobha Park City floor plans?", "Use our contact page to request the latest floor plan material available from the developer."],
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
