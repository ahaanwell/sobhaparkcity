import { JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import ContactPage from "./ContactPage";

const PATH = "/contact";
const TITLE = "Contact Sobha Park City | Hennur Project Enquiries";
const DESCRIPTION =
  "Contact us with questions about Sobha Park City on Hennur Main Road, North Bangalore. Call or WhatsApp to ask about reported prices, apartment plans and available project information.";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "Sobha Park City contact",
    "Sobha Park City Hennur contact",
    "Sobha Park City project enquiry",
    "Sobha Park City phone and WhatsApp",
    "Sobha Park City price enquiry",
    "Sobha Park City floor plan enquiry",
    "Sobha Park City site visit information",
  ],
});

const schema = pageSchema({
  path: PATH,
  name: "Contact",
  title: TITLE,
  description: DESCRIPTION,
  type: "ContactPage",
});

export default function page() {
  return (
    <>
      <JsonLd data={schema} />
      <ContactPage />
    </>
  );
}
