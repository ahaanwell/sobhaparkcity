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
  images: [{ ...IMAGES.banner, alt: "Sobha Park City proposed location on Hennur Main Road, North Bangalore" }],
});

const FAQS = [
  ["Where is Sobha Park City proposed to be located?", "Sobha Park City is described in the supplied project information as a proposed development on Hennur Main Road in North Bangalore. Confirm the exact address and project entrance through current official documents before visiting."],
  ["Is the exact Sobha Park City site address confirmed?", "The precise site address and entrance should be verified with the developer and current project disclosures. Do not rely on a general locality or map pin as confirmation of the project boundary."],
  ["How can I assess connectivity from Sobha Park City?", "Check the actual routes from the confirmed site entrance to your workplace and regular destinations. Travel times vary by route, time of day and traffic, so test journeys during the hours you expect to travel."],
  ["Is a metro station within walking distance of Sobha Park City?", "The supplied project information does not confirm a nearby operational metro station or walking distance. Check current station locations and service status with the relevant transit authority."],
  ["What should I verify before visiting the Sobha Park City location?", "Confirm the current project address, entrance, visitor arrangements and route with the developer or sales team. You can also check approach roads, public transport and nearby daily services during your visit."],
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
