import BlogSection from "@/components/BlogsSection";
import { IMAGES, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import MasterPlanPage from "./MasterPlanPage";

const PATH = "/master-plan";
const TITLE = "Sobha Parkcity Master Plan | 50-Acre Hennur Development";
const DESCRIPTION =
  "Explore the reported Sobha Parkcity master plan on Hennur Main Road, North Bangalore, including its 50-acre site, 12 residential towers and 4,400+ proposed apartments. Verify the approved layout and specifications.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Parkcity master plan",
    "Sobha Parkcity site layout",
    "Sobha Parkcity tower layout",
    "Sobha Parkcity 50 acre master plan",
    "Sobha Parkcity 12 towers",
    "Sobha Parkcity 4400 apartments",
    "Sobha Parkcity Hennur master plan",
    "Sobha Parkcity Hennur Main Road site plan",
    "North Bangalore apartment township master plan",
  ],
  images: [{ ...IMAGES.masterPlan, alt: "Reported Sobha Parkcity master plan for the proposed Hennur Main Road development" }],
});

const FAQS = [
  ["Where is the Sobha Parkcity master plan for?", "It relates to the proposed Sobha Parkcity township on Hennur Main Road in North Bangalore. Confirm the project boundary and address using current official documents."],
  ["How large is the proposed Sobha Parkcity development?", "The supplied project information describes a site of approximately 50 acres. Verify the final area and land use in the approved master plan."],
  ["How many blocks, wings and apartments are planned?", "The project is described as having 12 blocks, 24 wings and around 4,463 apartments. These are proposed figures and should be confirmed against approved project disclosures."],
  ["What floor structure is planned at Sobha Parkcity?", "The supplied floor structure is 3 basements + ground + 42 floors. Check the latest sanctioned plans for confirmation."],
  ["Is the Sobha Parkcity master plan final?", "A verified final approved master plan has not been confirmed in the project information available here. Request the latest plan and check it against applicable approvals before relying on it."],
  ["What should buyers review in a master plan?", "Review tower locations and spacing, project access, internal roads, pedestrian routes, open areas, amenity locations and the relationship of the selected apartment to shared spaces. Confirm these details in the approved plan."],
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
